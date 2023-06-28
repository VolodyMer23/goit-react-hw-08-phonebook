import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Phonebook from './Phonebook/Phonebook';
import Login from './Login/Login';
import Signup from './SignUp/Signup';
import { getUserToken } from 'Redux/selectors';
import { useSelector } from 'react-redux';

export default function App() {
  const token = useSelector(getUserToken);
  console.log('APP token :>> ', token);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="register"
          element={!token ? <Signup /> : <Navigate to={'/contacts'} replace />}
        />
        <Route
          path="login"
          element={!token ? <Login /> : <Navigate to={'/contacts'} replace />}
        />
        <Route
          path="contacts"
          element={token ? <Phonebook /> : <Navigate to={'/login'} replace />}
        />
      </Route>
    </Routes>
  );
}
