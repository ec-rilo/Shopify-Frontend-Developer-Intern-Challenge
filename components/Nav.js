import styled from 'styled-components';

// Components
import Logo from './Logo';

function Nav({ className }) {
  return (
    <nav className={className}>
      <Logo />
    </nav>
  );
}

const StyledNav = styled(Nav)`

`;

export default StyledNav;