import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUser, thunkLogout } from '../../store/userSlice';
import { selectFavoriteCount, thunkFetchPlaces } from '../../store/placesSlice';

const HeaderNav = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const favoriteCount = useAppSelector(selectFavoriteCount);

  const handleLogoutClick = async (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    if (!user.isLoading) {
      await dispatch(thunkLogout());
      await dispatch(thunkFetchPlaces());
    }
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {user.isAuth ? (
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                  <img src={user.authInfo.avatarUrl} alt={user.authInfo.name} />
                </div>
                <span className="header__user-name user__name">{user.authInfo.email}</span>
                <span className="header__favorite-count">{favoriteCount}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href={AppRoute.Logout} onClick={handleLogoutClick}>
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default React.memo(HeaderNav);
