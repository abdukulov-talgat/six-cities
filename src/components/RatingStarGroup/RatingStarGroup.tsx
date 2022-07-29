import React from 'react';
import { ratingToTitle } from '../../const';

type RatingStarGroupProps = {
  value: number;
  isChecked: boolean;
  onChange: (rating: number) => void;
  disabled: boolean;
};

const RatingStarGroup = ({ value, isChecked, onChange, disabled }: RatingStarGroupProps) => (
  <>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      value={value}
      id={`${value}-stars`}
      type="radio"
      checked={isChecked}
      onChange={() => onChange(value)}
      disabled={disabled}
    />
    <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={ratingToTitle[value]}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);

export default RatingStarGroup;
