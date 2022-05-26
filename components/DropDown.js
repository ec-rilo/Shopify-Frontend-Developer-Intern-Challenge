import styled from 'styled-components';

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

export { StyledSelect, StyledOption };