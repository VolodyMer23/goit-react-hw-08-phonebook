import { NavLink, Outlet } from 'react-router-dom';
import { Container } from '../Phonebook/Phonebook.styled';
import { Header, Main } from './Layout.styled';
import { getUserToken } from 'Redux/selectors';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const token = useSelector(getUserToken);

  return (
    <Container>
      <Header>
        <div>Logo</div>
        <nav>
          {!token && <NavLink to={'/register'}>SignUP</NavLink>}
          {!token ? (
            <NavLink to={'/login'}>Login</NavLink>
          ) : (
            <NavLink to={'/contacts'}>Contacts</NavLink>
          )}
        </nav>
        {token && <div>Avatar</div>}
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
