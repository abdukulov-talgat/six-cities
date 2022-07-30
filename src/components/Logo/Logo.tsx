import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import React from 'react';

type LogoProps = {
  isActive?: boolean;
  variant?: 'default' | 'footer';
};

const Logo = ({ isActive = false, variant = 'default' }: LogoProps) => {
  const linkClass = isActive ? 'header__logo-link header__logo-link--active' : 'header__logo-link';

  return variant === 'default' ? (
    <Link className={linkClass} to={AppRoute.Home}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  ) : (
    <Link className="footer__logo-link" to={AppRoute.Home}>
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
    </Link>
  );
};

export default React.memo(Logo);
