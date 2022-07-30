import React from 'react';
import { CityName } from '../../const';
import { useAppDispatch } from '../../hooks/hooks';
import { changeActiveFilter } from '../../store/filtersSlice';
import { setHoveredPlace } from '../../store/hoveredPlaceSlice';

type LocationItemProps = {
  name: CityName;
  isActive: boolean;
};

const LocationItem = ({ name, isActive }: LocationItemProps) => {
  const dispatch = useAppDispatch();
  const classes = isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link';

  const handleLocationClick = (evt: React.MouseEvent) => {
    evt.preventDefault();

    dispatch(changeActiveFilter(name));
    dispatch(setHoveredPlace(undefined));
  };

  return (
    <li className="locations__item">
      <a className={classes} onClick={handleLocationClick}>
        <span>{name}</span>
      </a>
    </li>
  );
};

export default React.memo(LocationItem);
