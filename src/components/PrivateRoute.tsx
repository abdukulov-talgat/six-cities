import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuth = true;

  if(!isAuth) {
    return <Navigate to='/login' />;
  }

  return (
    <Outlet />
  );
};


export default PrivateRoute;
