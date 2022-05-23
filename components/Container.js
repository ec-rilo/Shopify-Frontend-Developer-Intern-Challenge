import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  max-width: 1800px;
  margin: auto;
  padding: 0 20px;
  ${({ noPadding }) => noPadding && 'padding: 0;'}
  ${({ fullPadding }) => fullPadding && 'padding: 20px;'}
  ${({ noWidth }) => noWidth && 'max-width: none;'}
  ${({ noPosition }) => noPosition && 'position: static;'}
`;

export default StyledContainer;
