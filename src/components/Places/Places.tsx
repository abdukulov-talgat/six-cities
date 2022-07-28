import React from 'react';
import PlaceList from '../PlaceList/PlaceList';
import { useAppSelector } from '../../hooks/hooks';
import { selectFilteredAndSortedPlaces } from '../../store/placesSlice';
import Sorting from '../Sorting/Sorting';
import { selectActiveFilter } from '../../store/filtersSlice';

const Places = () => {
  const placesCount = useAppSelector(selectFilteredAndSortedPlaces).length;
  const activeFilter = useAppSelector(selectActiveFilter);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {placesCount} places to stay in {activeFilter}
      </b>
      <Sorting />
      <PlaceList />
    </section>
  );
};

export default Places;
