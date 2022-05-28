import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Assets
import profileImg from '../public/images/stock-profile-photo.jpeg';

// Components
import StyledContainer from '../components/Container';
import StyledLowerDash from '../components/LowerDash';
import StyledUpperDash from '../components/UpperDash';

if (typeof window !== 'undefined') {
  if (!localStorage.getItem('demoCards')) {
    const cardsObj = {
      'most recent': [],
      'text-davinci-002': [],
      'text-curie-001': [],
      'text-babbage-001': [],
      'text-ada-001': [],
    }
    localStorage.setItem('demoCards', JSON.stringify(cardsObj));
  }
}

function DemoDashboard({ className }) {
  const [userData, setUserData] = useState('');
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState('most recent');

  // Loads cards on page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cardsObj = JSON.parse(localStorage.getItem('demoCards'));
      setCards(cardsObj['most recent']);
    }
  }, []);

  const updateCards = (cardsObj) => {
    if (filter !== 'most recent') {
      setCards(cardsObj[filter]);
    } else {
      setCards(cardsObj['most recent']);
    }
  }

  const addCard = (cardData, engineName) => {
    const newCardData = { ...cardData};
    newCardData.name = 'Guest';
    newCardData.photo_url = profileImg;

    let cardsObj = JSON.parse(localStorage.getItem('demoCards'));

    cardsObj['most recent'].unshift(newCardData);
    cardsObj[engineName].unshift(newCardData);

    updateCards(cardsObj);

    localStorage.setItem('demoCards', JSON.stringify(cardsObj));
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      let cardsObj = JSON.parse(localStorage.getItem('demoCards'));

      if (filter !== 'most recent') {
        setCards(cardsObj[filter]);
      } else {
        setCards(cardsObj['most recent']);
      }
    }
  }, [filter]);

  return (
    <div className={className}>
      <StyledUpperDash userName={'Guest'} />
      <StyledLowerDash
        cards={cards}
        addCard={addCard}
        user={userData}
        setFilter={setFilter}
      />
    </div>
  );
}

const StyledDemoDashboard = styled(DemoDashboard)`

`;

export default StyledDemoDashboard;
