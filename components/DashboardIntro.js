import Image from 'next/image';
import styled from 'styled-components';

// Note: Cont is short for Container

// Assets
import viewport from '../assets/viewportSizes';
import womenCompSrc from '../public/images/women-on-comp-icon.svg';

const TextCont = styled.div`
  padding: 140px 0;
  width: 90%;

  @media (${viewport.md}) {
    padding: 180px 0;
  }
`;

const StyledH1 = styled.h1`
  font-family: var(--fnt-bold);
  font-size: 2rem;
  margin-bottom: 20px;

  @media (${viewport.sm}) {
    font-size: 2.5rem;
  }

  @media (${viewport.lg}) {
    font-size: 3rem;
  }
`;

const StyledP = styled.p`
  line-height: 1.5;
  font-family: var(--fnt-medium);
  color: var(--clr-waikawa-grey);
`;

const StyledEmphasis = styled.span`
  color: var(--clr-purple-blue);
  font-family: var(--fnt-bold);
`;

function Img({ className, src, alt }) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  )
}

const StyledImg = styled(Img)`
  position: relative;
  height: 120px;
  width: 200px;

  @media (${viewport.lg}) {
    height: 300px;
    width: 270px;
  }
`;

const ImgCont = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 0;

  @media (${viewport.lg}) {
    position: relative;
    bottom: 0;
  }
`;

function DashboardIntro({ className }) {
  return (
    <div className={className}>
      <TextCont>
        <StyledH1>Fun with GPT-3</StyledH1>
        <StyledP>Lorem Ipsum set dolor von amet lot something at <StyledEmphasis>Shopify</StyledEmphasis> and <StyledEmphasis>Redwoods.hum</StyledEmphasis>!</StyledP>
      </TextCont>
      <ImgCont>
        <StyledImg src={womenCompSrc} alt="A women pointing at an ai computer" />
      </ImgCont>
    </div>
  );
}

const StyledDashboardIntro = styled(DashboardIntro)`
  position: relative;
  margin: auto;

  @media (${viewport.lg}) {
    display: flex;
  }
`;

export default StyledDashboardIntro;