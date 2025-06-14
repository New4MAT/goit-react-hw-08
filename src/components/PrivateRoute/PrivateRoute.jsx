import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
