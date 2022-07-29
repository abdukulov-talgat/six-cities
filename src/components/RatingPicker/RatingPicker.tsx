import React from 'react';
import RatingStarGroup from '../RatingStarGroup/RatingStarGroup';

type RatingPickerProps = {
  onRatingChange: (rating: number) => void;
  value: number;
  disabled: boolean;
};

const starsArr = [5, 4, 3, 2, 1];

const RatingPicker = ({ onRatingChange, value, disabled }: RatingPickerProps) => (
  <div className="reviews__rating-form form__rating">
    {starsArr.map((star) => (
      <RatingStarGroup
        key={star}
        value={star}
        isChecked={star === value}
        onChange={onRatingChange}
        disabled={disabled}
      />
    ))}
  </div>
);

export default RatingPicker;
