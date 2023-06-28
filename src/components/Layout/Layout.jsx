import { NavLink, Outlet } from 'react-router-dom';
import { Container } from '../Phonebook/Phonebook.styled';
import { Header, Main } from './Layout.styled';
import { getUserToken } from 'Redux/selectors';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const token = useSelector(getUserToken);
  console.log('token :>> ', token);
  return (
    <Container>
      <Header>
        <div>Logo</div>
        {token && <NavLink to={'/contacts'}>Contacts</NavLink>}
        <nav>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/register'}>SignUP</NavLink>
        </nav>
        <div>Avatar</div>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
