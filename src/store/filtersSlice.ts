import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CityName } from '../const';

type FiltersState = {
  items: [
    CityName.Paris,
    CityName.Cologne,
    CityName.Brussels,
    CityName.Amsterdam,
    CityName.Hamburg,
    CityName.Dusseldorf
  ];
  active: CityName;
};

const initialState: FiltersState = {
  items: [
    CityName.Paris,
    CityName.Cologne,
    CityName.Brussels,
    CityName.Amsterdam,
    CityName.Hamburg,
    CityName.Dusseldorf,
  ],
  active: CityName.Paris,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeActiveFilter(state, action: PayloadAction<CityName>) {
      state.active = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { changeActiveFilter } = filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters;
export const selectActiveFilter = (state: RootState) => state.filters.active;
