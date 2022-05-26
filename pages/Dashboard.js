import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Assets
import { io } from "socket.io-client";

// Firebase
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

// Components
import StyledNav from '../components/Nav';
import StyledContainer from '../components/Container';
import StyledDashboardIntro from '../components/DashboardIntro';
import StyledLowerDash from '../components/LowerDash';

/* ----------- UpperContainer Content ----------- */

const IntroCont = styled.div`
  max-width: 1280px;
  margin: auto;
`;

const StyledUpperCont = styled(UpperCont)`
  background-color: var(--clr-porcelain);
`;

const getFirstName = (name) => {
  const whitespaceIndex = name.indexOf(' ');
  const firstName = name.slice(0, whitespaceIndex);
  return firstName;
};

function UpperCont({ className }) {
  const [user, loading, error] = useAuthState(auth);
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    if (user) {
      setFirstName(getFirstName(user.displayName));
    }
  }, [user]);

  return (
    <div className={className}>
      <StyledContainer fullPadding>
        <StyledNav dashboard userName={firstName}/>
        <IntroCont>
          <StyledDashboardIntro />
        </IntroCont>
      </StyledContainer>
    </div>
  );
}

/* ----------- Dashboard Content ----------- */

function Dashboard({ className }) {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState('');
  const [cards, setCards] = useState([]);


  // Loads cards on load.
  useEffect(() => {
    const socket = io();
    socket.emit('cardPosted');
    socket.once('allCardsDesc', (newCards) => {
      setCards(newCards);
    })
  }, []);

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
      <StyledUpperCont />
      <StyledLowerDash cards={cards} addCard={addCard} user={userData} />
    </div>
  );
}

const StyledDashboard = styled(Dashboard)`

`;

export default StyledDashboard;
