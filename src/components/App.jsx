import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Signup from './SignUp/Signup';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import { useSelector } from 'react-redux';
import { getUserToken } from 'Redux/selectors';

export default function App() {
  const token = useSelector(getUserToken);
  

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="register"
          element={!token ? <Signup /> : <Navigate to={'/contacts'} replace />}
        />
        <Route
          path="login"
          element={
            !token ? <LoginPage /> : <Navigate to={'/contacts'} replace />
          }
        />
        <Route
          path="contacts"
          element={
            token ? <ContactsPage /> : <Navigate to={'/login'} replace />
          }
        />
      </Route>
    </Routes>
  );
}
