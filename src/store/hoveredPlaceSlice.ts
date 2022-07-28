import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Point } from '../const';
import { RootState } from './store';

type HoveredPlaceState = {
  point: Point | undefined;
};

const initialState: HoveredPlaceState = {
  point: undefined,
};

const hoveredPlaceSlice = createSlice({
  name: 'hoveredPlace',
  initialState,
  reducers: {
    setHoveredPlace(state, action: PayloadAction<Point | undefined>) {
      state.point = action.payload;
    },
  },
});

export default hoveredPlaceSlice.reducer;
export const { setHoveredPlace } = hoveredPlaceSlice.actions;

export const selectHoveredPlace = (state: RootState) => state.hoveredPlace.point;
