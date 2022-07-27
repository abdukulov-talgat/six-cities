import { Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import LoginForm from '../components/LoginForm/LoginForm';
import Logo from '../components/Logo/Logo';
import { AppRoute } from '../const';
import { useAppSelector } from '../hooks/hooks';
import { selectIsAuth } from '../store/userSlice';

const Login = () => {
  const isAuth = useAppSelector(selectIsAuth);


  if (isAuth) {
    return <Navigate to={AppRoute.Home} replace />;
  }

  return (
    <div className="page page--gray page--login">
      <Header>
        <div className="header__left">
          <Logo />
        </div>
      </Header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
