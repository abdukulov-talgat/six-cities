import { configureStore, AnyAction, ThunkAction } from '@reduxjs/toolkit';
import BackendApi from '../services/BackendApi/BackendApi';
import userReducer from './userSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: new BackendApi()
      }
    }),
});


export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<R = void> = ThunkAction<R, RootState, BackendApi, AnyAction>
