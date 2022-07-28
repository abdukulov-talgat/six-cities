import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeActiveSort, selectSorts } from '../../store/sortsSlice';
import { SortType } from '../../const';
import SortingHead from '../SortingHead/SortingHead';

const SortText = {
  [SortType.Popular]: 'Popular',
  [SortType.TopRated]: 'Top rated first',
  [SortType.LowToHigh]: 'Price: low to high',
  [SortType.HighToLow]: 'Price: high to low',
};

const FOCUSABLE = 0;
const NON_FOCUSABLE = -1;

const Sorting = () => {
  const dispatch = useAppDispatch();
  const { items, active } = useAppSelector(selectSorts);
  const [isOpen, setIsOpen] = useState(false);

  const listClasses = isOpen
    ? 'places__options places__options--custom places__options--opened'
    : 'places__options places__options--custom';

  const handleSortItemClick = (item: SortType) => {
    setIsOpen(false);
    dispatch(changeActiveSort(item));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <SortingHead sortType={active} onClick={() => setIsOpen((prevState) => !prevState)} />
      <ul className={listClasses}>
        {items.map((item) => (
          <li
            key={item}
            className={active === item ? 'places__option places__option--active' : 'places__option'}
            tabIndex={isOpen ? FOCUSABLE : NON_FOCUSABLE}
            onClick={() => handleSortItemClick(item)}
          >
            {SortText[item]}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Sorting;
