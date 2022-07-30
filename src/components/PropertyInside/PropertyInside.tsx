import React from 'react';

type PropertyInsideProps = {
  goods: string[];
};

const PropertyInside = ({ goods }: PropertyInsideProps) => (
  <div className="property__inside">
    <h2 className="property__inside-title">What&apos;s inside</h2>
    <ul className="property__inside-list">
      {goods.map((good) => (
        <li key={good} className="property__inside-item">
          {good}
        </li>
      ))}
    </ul>
  </div>
);

export default React.memo(PropertyInside, (prev, next) => {
  if (prev.goods.length !== next.goods.length) {
    return false;
  }
  return !prev.goods.some((prevGood, index) => prevGood !== next.goods[index]);
});
