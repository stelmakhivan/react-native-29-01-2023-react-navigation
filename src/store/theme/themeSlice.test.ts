import { configureStore } from '@reduxjs/toolkit';

import uiReducer, { toggleTheme, selectTheme } from './themeSlice';

import { RootState } from '@/store';

describe('UI Slice', () => {
  it('should return initial value', () => {
    expect(uiReducer(undefined, { type: '' })).toEqual({
      theme: 'light',
    });
  });

  it('should toggle theme', () => {
    const state = uiReducer(undefined, toggleTheme());

    expect(state.theme).toEqual('dark');
  });

  it('should return selected theme', () => {
    const rootStore = configureStore({
      reducer: {
        ui: uiReducer,
      },
    });

    const theme = selectTheme(rootStore.getState() as RootState);

    expect(theme).toEqual('light');
  });
});
