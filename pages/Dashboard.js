import styled from 'styled-components';

// Components
import StyledNav from '../components/Nav';
import StyledContainer from '../components/Container';
import StyledDashboardIntro from '../components/DashboardIntro';
import { StyledBtn2 } from '../components/Btns';
import Card from '../components/Card';

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
          <StyledDashboardIntro />
        </IntroCont>
      </StyledContainer>
    </div>
  );
}

/* ----------- LowerContainer Content ----------- */

function PromptCont({ className }) {
  return (
    <div className={className}>
      <StyledPromptHeaderCont>
        <StyledH2>Enter prompt</StyledH2>
        <StyledSelect name="engines" id="engines">
          <StyledOption value="text-curie-001">text-curie-001</StyledOption>
          <StyledOption value="text-davinci-002">text-davinci-002</StyledOption>
          <StyledOption value="text-babbage-001">text-babbage-001</StyledOption>
          <StyledOption value="text-ada-001">text-ada-001</StyledOption>
        </StyledSelect>
      </StyledPromptHeaderCont>
      <div>
        <StyledTextArea />
      </div>
      <StyledSubmitBtnCont>
        <StyledBtn2 clickHandler={() => console.log('asdf')} text="Submit"/>
      </StyledSubmitBtnCont>
    </div>
  );
}

const StyledPromptCont = styled(PromptCont)`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledPromptHeaderCont = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledH2 = styled.h2`
  font-family: var(--fnt-bold);
  font-size: 1.3rem;
`;

const StyledSelect = styled.select`
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 15px;
  font-family: var(--fnt-bold);
  font-size: 1rem;
`;

const StyledOption = styled.option`
  font-family: var(--fnt-bold);
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 250px;
`;

const StyledSubmitBtnCont = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ResponsesCont({ className }) {
  return (
    <div className={className}>
      <StyledPromptHeaderCont>
        <StyledRespHeaderCont>
          <StyledH2>Responses</StyledH2>
          <StyledP>1,023 responses</StyledP>
        </StyledRespHeaderCont>
        <StyledSelect name="responses-filter" id="responses-filter">
          <StyledOption value="most recent">Most recent</StyledOption>
          <StyledOption value="text-curie-001">text-curie-001</StyledOption>
          <StyledOption value="text-davinci-002">text-davinci-002</StyledOption>
          <StyledOption value="text-babbage-001">text-babbage-001</StyledOption>
          <StyledOption value="text-ada-001">text-ada-001</StyledOption>
        </StyledSelect>
      </StyledPromptHeaderCont>

      <StyledRespCardsCont>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </StyledRespCardsCont>
    </div>
  );
}

const StyledResponsesCont = styled(ResponsesCont)`

`;

const StyledRespHeaderCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledP = styled.p`
  color: var(--clr-waikawa-grey);
  font-family: var(--fnt-medium);
`;

const StyledRespCardsCont = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  gap: 50px;
  justify-content: space-between;
`;

function LowerCont({ className }) {
  return (
    <div className={className}>
      <StyledContainer fullPadding>
        <IntroCont>
          <StyledPromptCont />
          <StyledResponsesCont />
        </IntroCont>
      </StyledContainer>
    </div>
  );
}

const StyledLowerCont = styled(LowerCont)`
  background-color: var(--clr-white);
`;

/* ----------- Dashboard Content ----------- */

function Dashboard({ className }) {
  return (
    <div className={className}>
      <StyledUpperCont />
      <StyledLowerCont />
    </div>
  );
}

const StyledDashboard = styled(Dashboard)`

`;

export default StyledDashboard;
