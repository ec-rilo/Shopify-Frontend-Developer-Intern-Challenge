import styled from 'styled-components';

// Components
import Logo from './Logo';

const StyledText = styled.p`
  font-family: var(--fnt-bold);
`;

function UserNameCont({ className, userName }) {
  return (
    <div className={className}>
      <StyledText>Welcome {userName}</StyledText>
    </div>
  );
}

const StyledUserNameCont = styled(UserNameCont)`
  display: none;
  ${({ dashboard }) => dashboard && 'display: block;'}
`;

function Nav({ className, userName, dashboard }) {
  return (
    <nav className={className}>
      <Logo />
      <StyledUserNameCont userName={userName} dashboard={dashboard && userName}/>
    </nav>
  );
}

const StyledNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default StyledNav;