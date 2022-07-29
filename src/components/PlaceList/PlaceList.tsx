import React from 'react';
import Card from '../Card/Card';
import { useAppSelector } from '../../hooks/hooks';
import { selectFilteredAndSortedPlaces } from '../../store/placesSlice';

const PlaceList = () => {
  const places = useAppSelector(selectFilteredAndSortedPlaces);
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <Card baseClass="cities" key={place.id} placeId={place.id} />
      ))}
    </div>
  );
};

export default PlaceList;
