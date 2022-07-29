import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectPlaceById, thunkChangeFavoriteStatus } from '../../store/placesSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { selectIsAuth } from '../../store/userSlice';
import { useWaitCursor } from '../../hooks/useWaitCursor';
import './ButtomBookmark.css';

type ButtonBookmarkProps = {
  placeId: number;
  size?: keyof typeof Size;
  baseClass: string;
};

const Size = {
  small: {
    width: 18,
    height: 19,
  },
  medium: {
    width: 31,
    height: 33,
  },
};

const ButtonBookmark = ({ placeId, baseClass, size = 'small' }: ButtonBookmarkProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const place = useAppSelector(selectPlaceById(placeId));
  const isAuth = useAppSelector(selectIsAuth);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isSending, setIsSending] = useWaitCursor(btnRef, 'pointer');

  if (!place) {
    return <Navigate to={AppRoute.NotFound} />;
  }
  const isFavorite = place.isFavorite;

  const btnClasses = isFavorite
    ? `button ${baseClass}__bookmark-button ${baseClass}__bookmark-button--active`
    : `button ${baseClass}__bookmark-button`;

  const handleButtonClick = async (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if (!isAuth) {
      return navigate(AppRoute.Login);
    }

    if (!isSending) {
      setIsSending(true);
      await dispatch(thunkChangeFavoriteStatus({ placeId, isFavorite: !isFavorite }));
      setIsSending(false);
    }
  };

  return (
    <button className={btnClasses} type="button" onClick={handleButtonClick} ref={btnRef}>
      <svg className={`${baseClass}__bookmark-icon`} width={Size[size].width} height={Size[size].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default ButtonBookmark;
