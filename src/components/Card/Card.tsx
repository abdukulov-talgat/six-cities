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
  baseClass: string;
  imageSize?: 'small' | 'medium';
};

const Card = ({ placeId, baseClass, imageSize = 'medium' }: PlaceCardProps) => {
  const place = useAppSelector(selectPlaceById(placeId));
  const dispatch = useAppDispatch();

  if (!place) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <article
      className={`${baseClass}__card place-card`}
      onMouseEnter={() => dispatch(setHoveredPlace(mapPlaceToPoint(place)))}
    >
      {place.isPremium && <Mark baseClass="place-card" />}
      <div className={`${baseClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={ApiRoute.Offer.concat(`/${placeId}`)}>
          <img
            className="place-card__image"
            src={place.previewImage}
            width={imageSize === 'medium' ? '260' : '150'}
            height={imageSize === 'medium' ? '200' : '110'}
            alt={place.title}
          />
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

export default React.memo(Card);
