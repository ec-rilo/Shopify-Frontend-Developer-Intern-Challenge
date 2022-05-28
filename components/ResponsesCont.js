import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Assets
import { io } from "socket.io-client";

// Components
import Card from './Card';
import { StyledOption, StyledSelect } from './DropDown';

const StyledTitleCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledP = styled.p`
  color: var(--clr-waikawa-grey);
  font-family: var(--fnt-medium);
`;

const StyledCardsCont = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  gap: 50px;
  justify-content: space-between;
`;

const StyledHeaderCont = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledH2 = styled.h2`
  font-family: var(--fnt-bold);
  font-size: 1.3rem;
`;

function ResponsesCont({ className, cards, setDashFilter }) {
  const [selectedFilter, setSelectedFilter] = useState('most recent');

  useEffect(() => {
    setDashFilter(selectedFilter);
  }, [selectedFilter, setDashFilter]);

  return (
    <div className={className}>
      <StyledHeaderCont>
        <StyledTitleCont>
          <StyledH2>Responses</StyledH2>
          <StyledP>{cards.length} responses</StyledP>
        </StyledTitleCont>
        <StyledSelect
          name="responses-filter"
          id="responses-filter"
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <StyledOption value="most recent">Most recent</StyledOption>
          <StyledOption value="text-curie-001">text-curie-001</StyledOption>
          <StyledOption value="text-davinci-002">text-davinci-002</StyledOption>
          <StyledOption value="text-babbage-001">text-babbage-001</StyledOption>
          <StyledOption value="text-ada-001">text-ada-001</StyledOption>
        </StyledSelect>
      </StyledHeaderCont>

      <StyledCardsCont>
        {cards.map((cardObj) => (
          <Card key={cardObj.id} cardData={cardObj} />
        ))}
      </StyledCardsCont>
    </div>
  );
}

const StyledResponsesCont = styled(ResponsesCont)`

`;

export default StyledResponsesCont;
