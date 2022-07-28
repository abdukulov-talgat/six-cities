import React from 'react';

type PlaceCardRatingProps = {
  starsCount: number;
};
const ONE_STAR_SIZE = 20;

const PlaceCardRating = ({ starsCount }: PlaceCardRatingProps) => (
  <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={{ width: `${starsCount * ONE_STAR_SIZE}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);

export default PlaceCardRating;
