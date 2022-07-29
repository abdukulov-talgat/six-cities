import React, { ReactNode } from 'react';

type PriceProps = {
  price: number;
  baseClass: string;
  children?: ReactNode;
};

const Price = ({ price, baseClass, children }: PriceProps) => {
  const childrenToRender =
    children !== undefined ? children : <span className={`${baseClass}__price-text`}>&#47;&nbsp;night</span>;

  return (
    <div className={`${baseClass}__price`}>
      <b className={`${baseClass}__price-value`}>&euro;{price}</b>
      {childrenToRender}
    </div>
  );
};

export default Price;
