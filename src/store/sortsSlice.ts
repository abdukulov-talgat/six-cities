import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { SortType } from '../const';

type SortsState = {
  items: [SortType.Popular, SortType.LowToHigh, SortType.HighToLow, SortType.TopRated];
  active: SortType;
};

const initialState: SortsState = {
  items: [SortType.Popular, SortType.LowToHigh, SortType.HighToLow, SortType.TopRated],
  active: SortType.Popular,
};

const sortsSlice = createSlice({
  name: 'sorts',
  initialState,
  reducers: {
    changeActiveSort(state, action: PayloadAction<SortType>) {
      state.active = action.payload;
    },
  },
});

export default sortsSlice.reducer;
export const { changeActiveSort } = sortsSlice.actions;

export const selectSorts = (state: RootState) => state.sorts;
export const selectActiveSort = (state: RootState) => state.sorts.active;
