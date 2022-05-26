import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Assets
import { io } from "socket.io-client";

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

  // Loads cards on load.
  useEffect(() => {
    const socket = io();
    socket.emit('cardPosted');
    socket.once('allCardsDesc', (newCards) => {
      setCards(newCards);
    });
  }, []);

  // Loads user information
  useEffect(() => {
    if (user) {
      setUserName(user.displayName);
    }
  }, [user]);

  useEffect(() => {
    const socket = io();
    socket.on('allCardsDesc', (newCards) => {
      setCards(newCards);
    })
  }, [])

  const addCard = (cardData, userInput) => {
    const newCardData = { ...cardData };

    newCardData.userName = user.displayName;
    newCardData.userInput = userInput;
    newCardData.userImg = user.photoURL;

    let newCards = cards.slice();
    newCards.unshift(newCardData);
    // setCards(newCards);
  }

  useEffect(() => {
    if (user) {
      setUserData({
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL
      });
    }
  }, [user]);

  return (
    <div className={className}>
      <StyledUpperDash userName={userName} />
      <StyledLowerDash cards={cards} addCard={addCard} user={userData} />
    </div>
  );
}

const StyledDashboard = styled(Dashboard)`

`;

export default StyledDashboard;
