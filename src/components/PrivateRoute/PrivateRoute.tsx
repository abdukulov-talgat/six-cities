import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { selectIsAuth } from '../../store/userSlice';

const PrivateRoute = () => {
  const isAuth = useAppSelector(selectIsAuth);

  if(!isAuth) {
    return <Navigate to='/login' />;
  }

  return (
    <Outlet />
  );
};


export default PrivateRoute;
