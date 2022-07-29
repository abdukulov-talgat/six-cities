import React from 'react';
import { ReviewGet } from '../../types/models';
import Rating from '../Rating/Rating';
import dayjs from 'dayjs';

type PropertyReviewItemProps = {
  review: ReviewGet;
};

const PropertyReviewItem = ({ review }: PropertyReviewItemProps) => {
  const date = dayjs(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt={review.user.name}
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={review.rating} baseClass="reviews" />
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={date.format('YYYY-MM-DD')}>
          {date.format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
};

export default PropertyReviewItem;
