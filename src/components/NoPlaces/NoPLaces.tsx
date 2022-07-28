import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectActiveFilter } from '../../store/filtersSlice';

const NoPLaces = () => {
  const activeFilter = useAppSelector(selectActiveFilter);

  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">
          We could not find any property available at the moment in {activeFilter}
        </p>
      </div>
    </section>
  );
};

export default NoPLaces;
