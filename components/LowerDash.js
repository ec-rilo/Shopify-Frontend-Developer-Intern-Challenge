import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Assets
import { io } from "socket.io-client";

// Components
import StyledContainer from './Container';
import StyledResponsesCont from './ResponsesCont';
import StyledPromptCont from './PromptCont';

const IntroCont = styled.div`
  max-width: 1280px;
  margin: auto;
`;

function LowerDash({ className, cards, addCard, user }) {
  return (
    <div className={className}>
      <StyledContainer fullPadding>
        <IntroCont>
          <StyledPromptCont addCard={addCard} user={user} />
          <StyledResponsesCont cards={cards} />
        </IntroCont>
      </StyledContainer>
    </div>
  );
}

const StyledLowerDash = styled(LowerDash)`
  background-color: var(--clr-white);
`;

export default StyledLowerDash;