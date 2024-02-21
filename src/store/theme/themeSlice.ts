import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/store';

export type ColorScheme = 'light' | 'dark';

interface ThemeState {
  theme: ColorScheme;
}

const initialState: ThemeState = {
  theme: 'light',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleTheme } = uiSlice.actions;

export const selectTheme = (state: RootState) => state.ui.theme;

export default uiSlice.reducer;
