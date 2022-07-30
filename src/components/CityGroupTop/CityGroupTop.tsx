import React from 'react';
import { AppRoute, CityName } from '../../const';
import { useAppDispatch } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { changeActiveFilter } from '../../store/filtersSlice';

type CityGroupTopProps = {
  name: CityName;
};

const CityGroupTop = ({ name }: CityGroupTopProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function handleLinkClick(evt: React.MouseEvent) {
    evt.preventDefault();

    dispatch(changeActiveFilter(name));
    return navigate(AppRoute.Home);
  }

  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#nowhere" onClick={handleLinkClick}>
          <span>{name}</span>
        </a>
      </div>
    </div>
  );
};

export default CityGroupTop;
