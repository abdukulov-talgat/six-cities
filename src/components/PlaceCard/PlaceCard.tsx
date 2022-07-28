import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectPlaceById } from '../../store/placesSlice';
import { Link, Navigate } from 'react-router-dom';
import { ApiRoute, AppRoute } from '../../const';
import PlaceCardMark from '../PlaceCardMark/PlaceCardMark';
import PlaceCardRating from '../PlaceCardRating/PlaceCardRating';
import ButtonBookmark from '../ButtonBookmark/ButtonBookmark';
import { setHoveredPlace } from '../../store/hoveredPlaceSlice';
import { mapPlaceToPoint } from '../../utils';

type PlaceCardProps = {
  placeId: number;
};

const PlaceCard = ({ placeId }: PlaceCardProps) => {
  const place = useAppSelector(selectPlaceById(placeId));
  const dispatch = useAppDispatch();

  if (!place) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const favoriteClasses =
    place?.isFavorite || false
      ? 'place-card__bookmark-button button place-card__bookmark-button--active'
      : 'place-card__bookmark-button button';

  return (
    <article className="cities__card place-card" onMouseEnter={() => dispatch(setHoveredPlace(mapPlaceToPoint(place)))}>
      {place.isPremium && <PlaceCardMark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={ApiRoute.Offer.concat(`/${placeId}`)}>
          <img className="place-card__image" src={place.previewImage} width="260" height="200" alt={place.title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonBookmark placeId={placeId} className={favoriteClasses} />
        </div>
        <PlaceCardRating starsCount={Math.round(place.rating)} />
        <h2 className="place-card__name">
          <Link to={ApiRoute.Offer.concat(`/${placeId}`)}>{place.title}</Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
