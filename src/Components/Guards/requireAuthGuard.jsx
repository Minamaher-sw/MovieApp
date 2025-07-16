import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children }) {
  const { authuser } = useContext(AuthContext);
  const location = useLocation();

  if (!authuser) {
    console.log("Unauthenticated user, redirecting to login");
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  console.log("Authenticated user, rendering child components");
  return children;
}

export default RequireAuth;
