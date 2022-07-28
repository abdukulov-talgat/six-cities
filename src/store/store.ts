import { configureStore, AnyAction, ThunkAction } from '@reduxjs/toolkit';
import BackendApi from '../services/BackendApi/BackendApi';
import userReducer from './userSlice';
import filterReducer from './filtersSlice';
import placesReducer from './placesSlice';
import sortsReducer from './sortsSlice';
import hoveredPlaceReducer from './hoveredPlaceSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    places: placesReducer,
    filters: filterReducer,
    sorts: sortsReducer,
    hoveredPlace: hoveredPlaceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: new BackendApi(),
      },
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R = void> = ThunkAction<R, RootState, BackendApi, AnyAction>;
