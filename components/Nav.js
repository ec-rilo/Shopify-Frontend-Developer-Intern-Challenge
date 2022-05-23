import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

// Firebase
import { auth } from '../firebaseConfig';
import { signOut } from "firebase/auth";

// Components
import Logo from './Logo';
import { StyledBtn2 } from '../components/Btns';

const StyledText = styled.p`
  display: block;
  ${({ welcomeVisible }) => !welcomeVisible && 'display: none;'}
  font-family: var(--fnt-bold);
`;

const StyledSignOutBtnCont = styled.div`
  display: none;
  ${({ welcomeVisible }) => !welcomeVisible && 'display: block;'}
`;

function UserNameCont({ className, userName }) {
  const router = useRouter();
  const [welcomeVisible, setWelcomeVisible] = useState(true);

  const signOutUser = () => {
    signOut(auth).then(() => {
      router.push('/');
    })
    .catch((err) => {
      console.error(`Failed to sign out user: ${err}`);
    });
  }

  // Sets the intervals where the sign out button appears and disappears.
  useEffect(() => {
    const timer = setInterval(() => {
      setWelcomeVisible((prev) => !prev);
    }, 30000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={className}>
      <StyledText
        welcomeVisible={welcomeVisible}
        onMouseEnter={() => setWelcomeVisible(false)}
      >
          Welcome {userName}
      </StyledText>
      <StyledSignOutBtnCont
        onMouseLeave={() => setWelcomeVisible(true)}
        welcomeVisible={welcomeVisible}
      >
        <StyledBtn2
          type="button"
          clickHandler={signOutUser}
          text="Sign out"
        />
      </StyledSignOutBtnCont>
    </div>
  );
}

const StyledUserNameCont = styled(UserNameCont)`
  display: none;
  ${({ dashboard }) => dashboard && 'display: flex;'}
  cursor: pointer;
`;

function Nav({ className, userName, dashboard }) {
  return (
    <nav className={className}>
      <Logo />
      <StyledUserNameCont userName={userName} dashboard={dashboard && userName}/>
    </nav>
  );
}

const StyledNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default StyledNav;