import React from 'react';
import { CityName } from '../../const';
import { Place } from '../../types/models';
import CityGroupTop from '../CityGroupTop/CityGroupTop';
import CityGroupBody from '../CityGroupBody/CityGroupBody';

type CityGroupProps = {
  name: CityName;
  places: Place[];
};

const CityGroup = ({ name, places }: CityGroupProps) =>
  places.length > 0 ? (
    <li className="favorites__locations-items">
      <CityGroupTop name={name} />
      <CityGroupBody places={places} />
    </li>
  ) : null;

export default CityGroup;
