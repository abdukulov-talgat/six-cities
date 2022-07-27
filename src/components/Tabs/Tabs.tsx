import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectCities } from '../../store/citiesSlice';
import LocationItem from '../LocationItem/LocationItem';


const Tabs = () => {
  const cities = useAppSelector(selectCities);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.items.map((city) => (
              <LocationItem key={city} name={city} isActive={city === cities.active}/>
            ))
          }
        </ul>
      </section>
    </div>
  );
};

export default Tabs;
