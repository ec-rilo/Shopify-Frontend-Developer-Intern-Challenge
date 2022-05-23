import styled from 'styled-components';

/* ----------- Btn1 ----------- */

function Btn1({ className, clickHandler, text }) {
  return (
    <button className={className} type="button" onClick={() => clickHandler()}>
      {text}
    </button>
  );
}

const StyledBtn1 = styled(Btn1)`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: 0;
  font-family: var(--fnt-bold);
  font-size: 1rem;

  background-color: var(--clr-white);
  color: var(--clr-black);

  ${({ primary }) => primary && `
    background-color: var(--clr-purple-blue);
    color: var(--clr-white);
  `}

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
`;

/* ----------- DemoBtn ----------- */

function DemoBtn({ className, clickHandler, text }) {
  return (
    <button className={className} type="button" onClick={() => clickHandler()}>
      {text}
    </button>
  );
}

const StyledDemoBtn = styled(DemoBtn)`
  background: none;
  color: var(--clr-waikawa-grey);
  border: none;
  padding: 0;
  font-family: var(--fnt-bold);
  font-size: 1rem;
  cursor: pointer;
  outline: inherit;
`;

export { StyledBtn1, StyledDemoBtn };
