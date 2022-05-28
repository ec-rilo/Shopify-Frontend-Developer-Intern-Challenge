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

  // Loads user information
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

  // Loads cards on load.
  useEffect(() => {
    // edit this to be an axios call to server.
    server.getCards('most recent')
      .then((cards) => {
        if (Array.isArray(cards)) {
          setCards(cards);
        }
        console.log(cards);
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  const addCard = (cardData) => {
    const socket = io();
    server.addCard(cardData)
      .then(() => {
        socket.emit('cardPosted', 'most recent');
      })
      .catch((err) => {
        console.error('post failed!: ', err);
      });
  }

  const setDashFilter = (selectedFilter) => {
    const socket = io();
    socket.emit('cardPosted', selectedFilter);
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
