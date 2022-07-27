import { RootState } from './store';
import { AuthInfo, UserCredentials } from '../types/models';
import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { removeToken, saveToken } from '../services/token';
import BackendApi from '../services/BackendApi/BackendApi';


type User = {
  isAuth: boolean,
  isLoading: boolean,
  error: string | null,
  authInfo: AuthInfo,
};

const initialState: User = {
  isAuth: false,
  isLoading: false,
  error: null,
  authInfo: {
    id: 0,
    name: '',
    email: '',
    avatarUrl: '',
    isPro: false,
    token: ''
  }
};

/*** Thunks ***/
export const thunkLogin = createAsyncThunk<AuthInfo, UserCredentials, { extra: BackendApi }>('user/login',
  async (user, thunkApi) => {
    const response = await thunkApi.extra.login(user);
    saveToken(response.data.token);
    return response.data;
  });

export const thunkCheckToken = createAsyncThunk<AuthInfo, void, { extra: BackendApi }>('/user/checkToken',
  async (empty, thunkApi) => {
    const response = await thunkApi.extra.checkToken();
    return response.data;
  });

export const thunkLogout = createAsyncThunk<void, void, { extra: BackendApi }>('/user/logout',
  async (empty, thunkAPI) => {
    await thunkAPI.extra.logout();
    removeToken();
  });
/*** Thunks End ***/

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      //Login
      .addCase(thunkLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunkLogin.fulfilled, (state, action: PayloadAction<AuthInfo>) => {
        state.isLoading = false;
        state.isAuth = true;
        state.authInfo = action.payload;
      })
      .addCase(thunkLogin.rejected,
        (state, action: PayloadAction<unknown, string, never, SerializedError>) => {
          state.isLoading = false;
          state.error = action.error.message || 'unknown thunkLogin error';
        })
      //CheckToken
      .addCase(thunkCheckToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunkCheckToken.fulfilled, (state, action: PayloadAction<AuthInfo>) => {
        state.isLoading = false;
        state.isAuth = true;
        state.authInfo = action.payload;
      })
      .addCase(thunkCheckToken.rejected,
        (state, action: PayloadAction<unknown, string, never, SerializedError>) => {
          state.isLoading = false;
          state.error = action.error.message || 'unknown thunkCheckToken error';
        })
      //Logout
      .addCase(thunkLogout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunkLogout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
      })
      .addCase(thunkLogout.rejected,
        (state, action: PayloadAction<unknown, string, never, SerializedError>) => {
          state.isLoading = false;
          state.error = action.error.message || 'unknown thunkLogout error';
        });

  }
});


export type { User };
export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user;
export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
