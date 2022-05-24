import Image from 'next/image';
import styled from 'styled-components';
import moment from 'moment';

function HeaderCont({ className, name, timeStamp, imgSrc }) {
  return (
    <div className={className}>
      <StyledImgCont imgSrc={imgSrc} />
      <StyledHeadTextCont>
        <StyledName>{name}</StyledName>
        <StyledTimestamp>{moment.unix(timeStamp).fromNow()}</StyledTimestamp>
      </StyledHeadTextCont>
    </div>
  );
}

const StyledHeaderCont = styled(HeaderCont)`
  display: flex;
  align-items: center;
  gap: 15px;
`;

function ImgCont({ className, imgSrc }) {
  return (
    <div className={className}>
      <Image src={imgSrc} alt="" layout="fill" />
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

function PromptCont ({ className, prompt }) {
  return (
    <div className={className}>
      <StyledHeading secondary>Prompt</StyledHeading>
      <StyledText secondary>{prompt}</StyledText>
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

function RespCont({ className, aiResponse }) {
  return (
    <div className={className}>
      <StyledHeading>OpenAI Response</StyledHeading>
      <StyledText>{aiResponse}</StyledText>
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

function EngineCardCont({ className, engineName }) {
  return (
    <div className={className}>
      <StyledEngineCard>{engineName} engine</StyledEngineCard>
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

function Card({ className, cardData }) {
  return (
    <div className={className}>
      <StyledHeaderCont
        name={cardData.userName}
        timeStamp={cardData.created}
        imgSrc={cardData.userImg}
      />
      <StyledPromptCont prompt={cardData.userInput} />
      <StyledRespCont aiResponse={cardData.choices[0].text} />
      <StyledEngineCardCont engineName={cardData.model} />
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
  width: 100%;
`;

export default StyledCard;