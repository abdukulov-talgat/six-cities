import React, { ReactNode } from 'react';

type PlaceCardRatingProps = {
  rating: number;
  baseClass: string;
  children?: ReactNode;
};
const ONE_STAR_SIZE = 20;

const Rating = ({ rating, baseClass, children }: PlaceCardRatingProps) => (
  <div className={`${baseClass}__rating rating`}>
    <div className={`${baseClass}__stars rating__stars`}>
      <span style={{ width: `${Math.round(rating) * ONE_STAR_SIZE}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
    {children}
  </div>
);

export default Rating;
