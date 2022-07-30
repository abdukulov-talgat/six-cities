import React from 'react';
import { Place } from '../../types/models';
import Card from '../Card/Card';

type CityGroupBodyProps = {
  places: Place[];
};

const CityGroupBody = ({ places }: CityGroupBodyProps) => (
  <div className="favorites__places">
    {places.map((place) => (
      <Card key={place.id} placeId={place.id} baseClass="favorites" imageSize="small" />
    ))}
  </div>
);

export default CityGroupBody;
