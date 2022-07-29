import React from 'react';
import { mapPlaceTypeToName } from '../../const';
import { PlaceType } from '../../types/models';

type FeaturesProps = {
  placeType: PlaceType;
  bedrooms: number;
  adults: number;
};

const Features = ({ placeType, bedrooms, adults }: FeaturesProps) => (
  <ul className="property__features">
    <li className="property__feature property__feature--entire">{mapPlaceTypeToName[placeType]}</li>
    <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
    <li className="property__feature property__feature--adults">Max {adults} adults</li>
  </ul>
);

export default Features;
