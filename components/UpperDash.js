import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Assets
import { io } from "socket.io-client";

// Firebase
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

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
  const firstName = name.slice(0, whitespaceIndex);
  return firstName;
};

function UpperDash({ className }) {
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

const StyledUpperDash = styled(UpperDash)`
  background-color: var(--clr-porcelain);
`;

export default StyledUpperDash;