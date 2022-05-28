import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import StyledContainer from './Container';
import StyledResponsesCont from './ResponsesCont';
import StyledPromptCont from './PromptCont';
import StyledDemoPromptCont from './DemoPromptCont';
import StyledDemoResponsesCont from './DemoResponsesCont';

const IntroCont = styled.div`
  max-width: 1280px;
  margin: auto;
`;

function LowerDash({
  className, cards, addCard, user, setFilter,
}) {
  return (
    <div className={className}>
      <StyledContainer fullPadding>
        <IntroCont>
          <StyledPromptCont user={user} addCard={addCard} />
          <StyledResponsesCont cards={cards} setDashFilter={setFilter} />
        </IntroCont>
      </StyledContainer>
    </div>
  );
}

const StyledLowerDash = styled(LowerDash)`
  background-color: var(--clr-white);
`;

export default StyledLowerDash;