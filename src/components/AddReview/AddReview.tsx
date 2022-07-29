import React, { useState } from 'react';
import RatingPicker from '../RatingPicker/RatingPicker';
import { isAddReviewValid } from '../../utils';
import BackendApi from '../../services/BackendApi/BackendApi';
import { AxiosError } from 'axios';
import { AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';
import { ReviewGet } from '../../types/models';
import { notifyError } from '../../services/notify';

type AddReviewProps = {
  placeId: number;
  onAddReview: (reviews: ReviewGet[]) => void;
};

const AddReview = ({ placeId, onAddReview }: AddReviewProps) => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);

  const isSubmitBtnDisabled = !isAddReviewValid(rating, text) || isSending;

  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (isSending) {
      return;
    }

    setIsSending(true);
    new BackendApi()
      .saveReview(placeId, { rating: rating, comment: text })
      .then((response) => {
        onAddReview(response.data);
        setRating(0);
        setText('');
      })
      .catch((err: AxiosError) => {
        if (err.response?.status === 401) {
          return navigate(AppRoute.Login);
        }
        notifyError("Can't save review. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingPicker onRatingChange={(newRating) => setRating(newRating)} value={rating} disabled={isSending} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
        disabled={isSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitBtnDisabled}>
          {isSending ? 'Sending' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default AddReview;
