import { Outlet } from 'react-router-dom';
import {
  Header,
  Main,
  Logo,
  Wrapper,
  RNavLink,
  Nav,
  Container,
} from './Layout.styled';
import { getUserToken } from 'Redux/selectors';
import { useSelector } from 'react-redux';
import UserBar from 'components/UserBar/UserBar';

export const Layout = () => {
  const token = useSelector(getUserToken);

  return (
    <Container>
      <Header>
        <Wrapper>
          <Logo />
          PhoneBookAPP
        </Wrapper>
        <Nav>
          {!token && <RNavLink to={'/register'}>Sign Up</RNavLink>}
          {!token ? (
            <RNavLink to={'/login'}>Sign In</RNavLink>
          ) : (
            <RNavLink to={'/contacts'}>Contacts</RNavLink>
          )}
        </Nav>
        {token && <UserBar />}
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
