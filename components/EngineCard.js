import styled from 'styled-components';

const StyledCard = styled.p`
  ${({ cardColors }) => `
  background-color: ${cardColors.bg};
  color: ${cardColors.text};
  `}
  padding: 10px;
  border-radius: 15px;
  font-family: var(--fnt-bold);
`;

const getCardColors = (engineName) => {
  let cardColors;

  const clr1 = { bg: 'var(--clr-pale-aqua)', text: 'var(--clr-french-blue)' };
  const clr2 = { bg: 'var(--clr-bluish-purple)', text: 'var(--clr-purple-blue)' };
  const clr3 = { bg: 'var(--clr-wild-race)', text: 'var(--clr-himalaya)' };
  const clr4 = { bg: 'var(--clr-beryl-green)', text: 'var(--clr-lawn-green)' };

  switch (engineName) {
    case 'text-curie-001':
      cardColors = clr1;
      break;
    case 'text-davinci-002':
      cardColors = clr2;
      break;
    case 'text-babbage-001':
      cardColors = clr3;
      break;
    case 'text-ada-001':
      cardColors = clr4;
      break;
  }

  return cardColors;
}

function EngineCard({ className, engineName }) {
  const cardColors = getCardColors(engineName);

  return (
    <div className={className}>
      <StyledCard cardColors={cardColors}>{engineName} engine</StyledCard>
    </div>
  );
}

const StyledEngineCard = styled(EngineCard)`
  display: flex;
  justify-content: flex-start;
`;

export default StyledEngineCard;