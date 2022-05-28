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
  className, cards, addCard, user, demo, setFilter,
}) {
  return (
    <div className={className}>
      <StyledContainer fullPadding>
        <IntroCont>
          { demo
            ?
            <StyledDemoPromptCont addCard={addCard} user={user} />
            :
            <StyledPromptCont user={user} />
          }
          { demo
            ?
            <StyledDemoResponsesCont cards={cards} setDashFilter={setFilter} />
            :
            <StyledResponsesCont cards={cards} />
          }

        </IntroCont>
      </StyledContainer>
    </div>
  );
}

const StyledLowerDash = styled(LowerDash)`
  background-color: var(--clr-white);
`;

export default StyledLowerDash;