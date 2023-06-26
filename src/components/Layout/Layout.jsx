import { NavLink, Outlet } from 'react-router-dom';
import { Container } from '../Phonebook/Phonebook.styled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <div>Logo</div>
        <NavLink>Contacts</NavLink>
        <nav>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/register'}>SignUP</NavLink>
        </nav>
        <div>Avatar</div>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
