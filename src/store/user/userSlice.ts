import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import JSONPlaceholder, { User } from '@/api/JSONPlaceholder/JSONPlaceholder';
import { RootState } from '@/store';

interface UserState {
  firstName: string;
  lastName: string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  user: User | null;
}

const initialState: UserState = {
  firstName: 'John',
  lastName: 'Doe',
  loading: 'idle',
  user: null,
};

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    return await JSONPlaceholder.getUser({
      userId,
      signal: thunkAPI.signal,
    });
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.loading = 'failed';
      state.user = null;
    });
  },
});

export const { setFirstName, setLastName } = userSlice.actions;

export const selectFirstName = (state: RootState) => state.user.firstName;
export const selectLastName = (state: RootState) => state.user.lastName;
export const selectFullName = (state: RootState) =>
  `${state.user.firstName} ${state.user.lastName}`;

export default userSlice.reducer;
