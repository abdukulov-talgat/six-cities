import React, { CSSProperties } from 'react';
import { SortType } from '../../const';

type SortingHeadProps = {
  sortType: SortType;
  onClick: () => void;
};

const styleNoTextSelect: CSSProperties = {
  userSelect: 'none',
};

const SortingHead = ({ sortType, onClick }: SortingHeadProps) => (
  <span className="places__sorting-type" tabIndex={0} onClick={onClick} style={styleNoTextSelect}>
    {sortType}
    <svg className="places__sorting-arrow" width="7" height="4">
      <use xlinkHref="#icon-arrow-select"></use>
    </svg>
  </span>
);

export default SortingHead;
