import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectPlaceById } from '../../store/placesSlice';
import { Link, Navigate } from 'react-router-dom';
import { ApiRoute, AppRoute } from '../../const';
import Mark from '../Mark/Mark';
import Rating from '../Rating/Rating';
import ButtonBookmark from '../ButtonBookmark/ButtonBookmark';
import { setHoveredPlace } from '../../store/hoveredPlaceSlice';
import { mapPlaceToPoint } from '../../utils';
import Price from '../Price/Price';

type PlaceCardProps = {
  placeId: number;
};

const PlaceCard = ({ placeId }: PlaceCardProps) => {
  const place = useAppSelector(selectPlaceById(placeId));
  const dispatch = useAppDispatch();

  if (!place) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <article className="cities__card place-card" onMouseEnter={() => dispatch(setHoveredPlace(mapPlaceToPoint(place)))}>
      {place.isPremium && <Mark baseClass="place-card" />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={ApiRoute.Offer.concat(`/${placeId}`)}>
          <img className="place-card__image" src={place.previewImage} width="260" height="200" alt={place.title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <Price price={place.price} baseClass="place-card" />
          <ButtonBookmark placeId={placeId} baseClass="place-card" />
        </div>
        <Rating rating={place.rating} baseClass="place-card" />
        <h2 className="place-card__name">
          <Link to={ApiRoute.Offer.concat(`/${placeId}`)}>{place.title}</Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
