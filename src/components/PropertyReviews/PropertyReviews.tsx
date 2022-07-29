import React, { useEffect, useState } from 'react';
import { ReviewGet } from '../../types/models';
import BackendApi from '../../services/BackendApi/BackendApi';
import { AxiosError } from 'axios';
import PropertyReviewItem from '../PropertyReviewItem/PropertyReviewItem';
import Spinner from '../Spinner/Spinner';
import './PropertyReviews.css';
import AddReview from '../AddReview/AddReview';
import { useAppSelector } from '../../hooks/hooks';
import { selectIsAuth } from '../../store/userSlice';

const MAX_REVIEWS = 10;

type PropertyReviewsProps = {
  placeId: number;
};

const reviewDateComparer = (a: ReviewGet, b: ReviewGet) => Date.parse(b.date) - Date.parse(a.date);

const PropertyReviews = ({ placeId }: PropertyReviewsProps) => {
  const isAuth = useAppSelector(selectIsAuth);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<ReviewGet[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    new BackendApi()
      .fetchReviews(placeId)
      .then((response) => {
        setReviews(response.data.slice(0, MAX_REVIEWS).sort(reviewDateComparer));
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [placeId]);

  const handleAddReview = (newReviews: ReviewGet[]) => {
    setReviews(newReviews.slice(0, MAX_REVIEWS).sort(reviewDateComparer));
  };

  return (
    <section className="property__reviews reviews">
      {isLoading ? (
        <div className="property__spinner-container">
          <Spinner />
        </div>
      ) : (
        <>
          <h2 className="reviews__title">
            Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
          </h2>
          {error ? (
            <div className="property__error">{error}</div>
          ) : (
            <ul className="reviews__list">
              {reviews.map((review) => (
                <PropertyReviewItem key={review.id} review={review} />
              ))}
            </ul>
          )}
        </>
      )}
      {isAuth && <AddReview placeId={placeId} onAddReview={handleAddReview} />}
    </section>
  );
};

export default PropertyReviews;
