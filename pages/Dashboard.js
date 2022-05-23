import styled from 'styled-components';

// Components
import StyledNav from '../components/Nav';
import StyledContainer from '../components/Container';
import StyledLogoIntro2 from '../components/Intro2';
import { StyledBtn2 } from '../components/Btns';

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

function LowerCont({ className }) {
  return (
    <div className={className}>
      <StyledContainer fullPadding>
        <IntroCont>
          <StyledPromptCont />
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
