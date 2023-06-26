import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Phonebook from './Phonebook/Phonebook';
import { Container } from '@mui/material';
import Login from './Login/Login';

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Phonebook />} />
        </Route>
      </Routes>
    </Container>
  );
}
