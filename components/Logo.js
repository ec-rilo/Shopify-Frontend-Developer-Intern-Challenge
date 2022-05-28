import Image from 'next/image';
import styled from 'styled-components';

// Assets
import treeIcon from '../public/images/tree-icon.svg';

const StyledText = styled.p`
  font-family: var(--fnt-bold);
  font-size: 1.1rem;
`;

function Img({ className }) {
  return (
    <div className={className}>
      <Image src={treeIcon} alt="A tree icon" layout="fill" objectFit="cover"/>
    </div>
  );
}

const StyledImage = styled(Img)`
  position: relative;
  height: 40px;
  width: 40px;
`;

function Logo({ className }) {
  return (
    <div className={className}>
      <StyledImage />
      <StyledText>redwoods.hum</StyledText>
    </div>
  );
}

const StyledLogo = styled(Logo)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--clr-black);
`;

export default StyledLogo;