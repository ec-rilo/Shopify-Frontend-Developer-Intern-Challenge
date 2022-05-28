import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Assets
import { io } from "socket.io-client";
import server from './api/server';

// Firebase
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

// Components
import StyledContainer from '../components/Container';
import StyledLowerDash from '../components/LowerDash';
import StyledUpperDash from '../components/UpperDash';

function Dashboard({ className }) {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState('');
  const [cards, setCards] = useState([]);
  const [userName, setUserName] = useState('');
  const [dashFilter, setDashFilter] = useState('most recent');
  const [socket] = useState(io());

  useEffect(() => {
    if (user) {
      setUserName(user.displayName);

      setUserData({
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL
      });
    }
  }, [user]);

  /* ------------ Loads cards depending on filter ------------ */

  useEffect(() => {
    const updateCards = (postedEngine) => {
      if (dashFilter === 'most recent' || dashFilter === postedEngine) {
        server.getCards(dashFilter)
          .then((cards) => {
            if (Array.isArray(cards)) {
              setCards(cards);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };

    updateCards(dashFilter);

    socket.removeAllListeners('cardAddedToDB');
    socket.on('cardAddedToDB', (response) => {
      updateCards(response);
    });

  }, [dashFilter, socket]);

  const addCard = (cardData, engineName) => {
    server.addCard(cardData)
      .then(() => {
        socket.emit('cardPosted', engineName);
      })
      .catch((err) => {
        console.error('post failed!: ', err);
      });
  }

  return (
    <div className={className}>
      <StyledUpperDash userName={userName} />
      <StyledLowerDash cards={cards} user={userData} addCard={addCard} setFilter={setDashFilter} />
    </div>
  );
}

const StyledDashboard = styled(Dashboard)`

`;

export default StyledDashboard;
