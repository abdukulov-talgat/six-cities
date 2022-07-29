import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { Place } from '../types/models';
import BackendApi from '../services/BackendApi/BackendApi';
import { RootState } from './store';
import { SortComparer } from '../utils';

type PlacesState = {
  isLoading: boolean;
  items: Place[];
  error: string | null;
};

const initialState: PlacesState = {
  isLoading: false,
  items: [],
  error: null,
};

/*** Thunks ***/
const thunkFetchPlaces = createAsyncThunk<Place[], void, { extra: BackendApi }>(
  'places/fetch',
  async (arg, thunkAPI) => {
    const response = await thunkAPI.extra.fetchPlaces();
    return response.data;
  }
);

export const thunkChangeFavoriteStatus = createAsyncThunk<
  Place,
  { placeId: number; isFavorite: boolean },
  { extra: BackendApi; state: RootState }
>('place/changeFavoriteStatus', async ({ placeId, isFavorite }, thunkAPI) => {
  const response = await thunkAPI.extra.changeFavoriteStatus(placeId, isFavorite);
  return response.data;
});
/*** Thunks End ***/

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(thunkFetchPlaces.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunkFetchPlaces.fulfilled, (state, action: PayloadAction<Place[]>) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(thunkFetchPlaces.rejected, (state, action: PayloadAction<unknown, string, never, SerializedError>) => {
        state.isLoading = false;
        state.error = action.error.message || 'unknown thunkFetchPlaces error';
      })
      .addCase(thunkChangeFavoriteStatus.fulfilled, (state, action: PayloadAction<Place>) => {
        const payload = action.payload as Place;
        state.items = state.items.map((item) => {
          if (item.id === payload.id) {
            return payload;
          }
          return item;
        });
      });
  },
});

export default placesSlice.reducer;
export { thunkFetchPlaces };

//prettier-ignore
export const selectFilteredAndSortedPlaces = (state: RootState) =>
  state.places.items
    .filter((place) => place.city.name === state.filters.active)
    .sort(SortComparer[state.sorts.active]);

export const selectPlaceById = (placeId: number) => (state: RootState) =>
  state.places.items.find((item) => item.id === placeId);

export const selectFavoriteCount = (state: RootState) => state.places.items.filter((place) => place.isFavorite).length;
