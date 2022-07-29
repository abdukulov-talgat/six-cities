import { Point, SortType } from './const';
import { Place } from './types/models';

const REVIEW_MIN_LENGTH = 50;
const REVIEW_MAX_LENGTH = 300;
const MIN_STARS = 1;
const MAX_STARS = 5;

export const SortComparer = {
  [SortType.Popular]: (a: Place, b: Place) => 0,
  [SortType.TopRated]: (a: Place, b: Place) => b.rating - a.rating,
  [SortType.HighToLow]: (a: Place, b: Place) => b.price - a.price,
  [SortType.LowToHigh]: (a: Place, b: Place) => a.price - b.price,
};

export const mapPlaceToPoint = (place: Place): Point => ({
  lat: place.location.latitude,
  lng: place.location.longitude,
});

export const isAddReviewValid = (rating: number, text: string) => isRatingValid(rating) && isReviewTextValid(text);

const isRatingValid = (rating: number) => rating >= MIN_STARS && rating <= MAX_STARS;

const isReviewTextValid = (text: string) => text.length >= REVIEW_MIN_LENGTH && text.length <= REVIEW_MAX_LENGTH;
