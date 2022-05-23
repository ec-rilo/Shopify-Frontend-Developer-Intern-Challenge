import styled from 'styled-components';

// Components
import StyledNav from '../components/Nav';
import StyledContainer from '../components/Container';
import StyledLogoIntro2 from '../components/Intro2';

/* ----------- UpperContainer Content ----------- */

const IntroCont = styled.div`
  max-width: 1280px;
  margin: auto;
`;

const StyledUpperCont = styled(UpperCont)`
  background-color: var(--clr-porcelain);
`;

function UpperCont({ className }) {
  return (
    <div className={className}>
      <StyledContainer fullPadding>
        <StyledNav />
        <IntroCont>
          <StyledLogoIntro2 />
        </IntroCont>
      </StyledContainer>
    </div>
  );
}

/* ----------- Dashboard Content ----------- */

function Dashboard({ className }) {
  return (
    <div className={className}>
      <StyledUpperCont />
    </div>
  );
}

const StyledDashboard = styled(Dashboard)`

`;

export default StyledDashboard;
