// MOBX
// import { addMiddleware, types, onSnapshot } from 'mobx-state-tree';
// import { actionLogger } from 'mst-middlewares';
//
// import ThemeStore from '@/store/theme';
// import UserStore from '@/store/user';
//
// const RootStore = types.model('RootStore', {
//   ui: ThemeStore,
//   user: UserStore,
// });
//
// export const rootStore = RootStore.create({
//   ui: ThemeStore.create(),
//   user: UserStore.create({
//     firstName: 'John Test',
//     lastName: 'Doe',
//   }),
// });
//
// addMiddleware(rootStore, actionLogger);
//
// onSnapshot(rootStore, (snapshot) => {
//   console.log(snapshot);
// });

// @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import uiReducer from '@/store/theme/themeSlice';
import userReducer from '@/store/user/userSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
