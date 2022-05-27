import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';

// Firebase
import { signInWithRedirect } from 'firebase/auth';
import { auth, provider } from '../firebaseConfig';

// Assets
import viewport from '../assets/viewportSizes';
import womenOnCompIcon from '../public/images/women-with-computer-icon.svg';

// Components
import StyledNav from '../components/Nav';
import StyledContainer from '../components/Container';
import StyledLoginIntro from '../components/LoginIntro';
import { StyledBtn1, StyledDemoBtn } from '../components/Btns';

/* ----------- Container1 Content ----------- */

const NavCont = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  flex: 1;
`;

const LoginIntroCont = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  ${({ noPadding }) => noPadding && 'padding: 0;'}
  ${({ fullPadding }) => fullPadding && 'padding: 20px;'}
  ${({ noWidth }) => noWidth && 'max-width: none;'}
  ${({ noPosition }) => noPosition && 'position: static;'}
  flex: 1;
  justify-content: center;
`;

const StyledBtnCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;

const StyledDemoBtnCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 100px;
  padding: 20px;
  box-sizing: border-box;
`;

function Cont1({ className }) {
  const router = useRouter();
  const createAccount = () => {
    signInWithRedirect(auth, provider);
  };

  const enterDemo = () => {
    router.push('/DemoDashboard');
  }

  return (
    <div className={className}>
      <LoginIntroCont fullPadding noPosition>
        <NavCont>
          <StyledNav />
        </NavCont>
        <div>
          <StyledLoginIntro />

          <StyledBtnCont>
            <StyledBtn1 clickHandler={createAccount} text="Sign in with Google" primary/>
            <a href="https://github.com/ec-rilo/fun-with-gpt-3" target="_blank" rel="noreferrer">
              <StyledBtn1 clickHandler={() => {}} text="Visit GitHub repository" />
            </a>
          </StyledBtnCont>
        </div>

      </LoginIntroCont>

      <StyledDemoBtnCont>
        <StyledDemoBtn clickHandler={enterDemo} text="Demo app"/>
      </StyledDemoBtnCont>
    </div>
  );
}

const StyledCont1 = styled(Cont1)`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  flex: 1;
  background-color: var(--clr-porcelain);
`;

/* ----------- Container2 Content ----------- */

const ImgCont = styled(StyledContainer)`
  max-width: 600px;
`;

function Cont2({ className }) {
  return (
    <div className={className}>
      <ImgCont>
        <Image src={womenOnCompIcon} alt="women pointing at a computer." />
      </ImgCont>
    </div>
  );
}

const StyledCont2 = styled(Cont2)`
  @media (${viewport.lg}) {
    display: flex;
  }
  display: none;
  min-height: 100vh;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

/* ----------- Background - Bg is short for background ----------- */

const StyledBg = styled.div`
  background-color: var(--clr-white);
  ${({ primary }) => primary && 'background-color: var(--clr-porcelain);'}
  flex: 1;

  ${({ desktop }) => desktop && `
    display: none;

    @media (${viewport.lg}) {
      display: block;
    }
  `}
`;

function BgCont({ className }) {
  return (
    <div className={className}>
      <StyledBg primary />
      <StyledBg desktop/>
    </div>
  );
}

const StyledBgCont = styled(BgCont)`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100%;
`;

/* ----------- Login Page ----------- */

function Login({ className }) {
  return (
    <div>
      <StyledBgCont />
      <StyledContainer className={className} noPadding>
        <StyledCont1 />
        <StyledCont2 />
      </StyledContainer>
    </div>
  );
}

const StyledLogin = styled(Login)`
  display: flex;
`;

export default StyledLogin;
