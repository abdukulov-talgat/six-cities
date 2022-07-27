import React from 'react';
import { City } from '../../const';
import { useAppDispatch } from '../../hooks/hooks';
import { changeActiveCity } from '../../store/citiesSlice';

type LocationItemProps = {
  name: City;
  isActive: boolean;
};

const LocationItem = ({ name, isActive }: LocationItemProps) => {
  const dispatch = useAppDispatch();
  const classes = isActive
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link';

  const handleLocationClick = (evt: React.MouseEvent) => {
    evt.preventDefault();

    dispatch(changeActiveCity(name));
  };

  return (
    <li className="locations__item">
      <a className={classes} onClick={handleLocationClick}>
        <span>{name}</span>
      </a>
    </li>
  );
};

export default LocationItem;
