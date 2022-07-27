import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { City } from '../const';


type CitiesState = {
  items: [City.Paris, City.Cologne, City.Brussels, City.Amsterdam, City.Hamburg, City.Dusseldorf],
  active: City,
}

const initialState: CitiesState = {
  items: [City.Paris, City.Cologne, City.Brussels, City.Amsterdam, City.Hamburg, City.Dusseldorf],
  active: City.Paris
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    changeActiveCity(state, action: PayloadAction<City>) {
      state.active = action.payload;
    }
  },
});


export default citiesSlice.reducer;
export const {changeActiveCity} = citiesSlice.actions;

export const selectCities = (state: RootState) => state.cities;
