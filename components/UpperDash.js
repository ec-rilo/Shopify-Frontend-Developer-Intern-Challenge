import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Assets
import { io } from "socket.io-client";

// Components
import StyledDashboardIntro from './DashboardIntro';
import StyledNav from './Nav';
import StyledContainer from './Container';

const IntroCont = styled.div`
  max-width: 1280px;
  margin: auto;
`;

const getFirstName = (name) => {
  const whitespaceIndex = name.indexOf(' ');
  let firstName = '';
  if (whitespaceIndex === -1) {
    firstName = name;
  } else {
    firstName = name.slice(0, whitespaceIndex);
  }
  return firstName;
};

function UpperDash({ className, userName }) {
  userName = getFirstName(userName);

  return (
    <div className={className}>
      <StyledContainer fullPadding>
        <StyledNav dashboard userName={userName}/>
        <IntroCont>
          <StyledDashboardIntro />
        </IntroCont>
      </StyledContainer>
    </div>
  );
}

const StyledUpperDash = styled(UpperDash)`
  background-color: var(--clr-porcelain);
`;

export default StyledUpperDash;