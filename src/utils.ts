import { Point, SortType } from './const';
import { Place } from './types/models';

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
