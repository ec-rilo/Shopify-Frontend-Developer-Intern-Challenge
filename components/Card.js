import Image from 'next/image';
import styled from 'styled-components';

// Assets
import aiIcon from '../public/images/ai-icon.jpeg';


function HeaderCont({ className }) {
  return (
    <div className={className}>
      <StyledImgCont />
      <StyledHeadTextCont>
        <StyledName>Lorem Ipsum</StyledName>
        <StyledTimestamp>3 hrs ago</StyledTimestamp>
      </StyledHeadTextCont>
    </div>
  );
}

const StyledHeaderCont = styled(HeaderCont)`
  display: flex;
  align-items: center;
  gap: 15px;
`;

function ImgCont({ className }) {
  return (
    <div className={className}>
      <Image src={aiIcon} alt="" layout="fill" />
    </div>
  );
}

const StyledImgCont = styled(ImgCont)`
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 2px solid var(--clr-white);
  overflow: hidden;
`;

const StyledHeadTextCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const StyledName = styled.p`
  color: var(--clr-white);
  font-family: var(--fnt-bold);
`;

const StyledTimestamp = styled.p`
  color: var(--clr-oslo-grey);
  font-family: var(--fnt-medium);
`;

function PromptCont ({ className }) {
  return (
    <div className={className}>
      <StyledHeading secondary>OpenAI Response</StyledHeading>
      <StyledText secondary>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</StyledText>
    </div>
  );
}

const StyledPromptCont = styled(PromptCont)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledText = styled.p`
  font-family: var(--fnt-regular);
  color: var(--clr-black);

  ${({ secondary }) => secondary && 'color: var(--clr-white);'}
`;

function RespCont({ className }) {
  return (
    <div className={className}>
      <StyledHeading>OpenAI Response</StyledHeading>
      <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</StyledText>
    </div>
  );
}

const StyledHeading = styled.h3`
  font-family: var(--fnt-bold);

  ${({ secondary }) => secondary && 'color: var(--clr-white);'}
`;

const StyledRespCont = styled(RespCont)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--clr-white);
  border-radius: 15px;
  padding: 20px;
`;

function EngineCardCont({ className }) {
  return (
    <div className={className}>
      <StyledEngineCard>text-davinci-002 Engine</StyledEngineCard>
    </div>
  );
}

const StyledEngineCardCont = styled(EngineCardCont)`
  display: flex;
  justify-content: flex-start;
`;

const StyledEngineCard = styled.p`
  background-color: red;
  padding: 10px;
  border-radius: 15px;
  font-family: var(--fnt-bold);
`;

function Card({ className }) {
  return (
    <div className={className}>
      <StyledHeaderCont />
      <StyledPromptCont />
      <StyledRespCont />
      <StyledEngineCardCont />
    </div>
  );
}

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--clr-black);
  padding: 20px;
  border-radius: 15px;
  max-width: 550px;
`;

export default StyledCard;