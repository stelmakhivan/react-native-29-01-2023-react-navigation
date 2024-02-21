// // import { flow, makeAutoObservable } from 'mobx';
// //
// // import JSONPlaceholder, { User } from '@/api/JSONPlaceholder/JSONPlaceholder';
// //
// // export type ColorScheme = 'light' | 'dark';
// //
// // class ThemeStore {
// //   constructor() {
// //     makeAutoObservable(this, {
// //       fetchUser: flow,
// //     });
// //   }
// //
// //   theme: ColorScheme = 'light';
// //
// //   setTheme = (theme: ColorScheme) => {
// //     this.theme = theme;
// //   };
// //
// //   *fetchUser({
// //     signal,
// //     userId = 1,
// //   }: Parameters<typeof JSONPlaceholder.getUser>[number]): Generator<
// //     Promise<User>,
// //     User,
// //     Awaited<User>
// //   > {
// //     console.log('fetchUser');
// //     const user = yield JSONPlaceholder.getUser({
// //       signal,
// //       userId,
// //     });
// //
// //     console.log(user);
// //
// //     return user;
// //   }
// // }
// //
// // export default new ThemeStore();
//
// import { flow, types } from 'mobx-state-tree';
//
// import { User } from '@/api';
// import JSONPlaceholder from '@/api/JSONPlaceholder/JSONPlaceholder';
//
// const ThemeStore = types
//   .model('ThemeStore', {
//     theme: types.optional(
//       types.union(types.literal('light'), types.literal('dark')),
//       'light',
//     ),
//   })
//   .actions((self) => ({
//     setTheme(theme: typeof self.theme) {
//       self.theme = theme;
//     },
//     fetchUser: flow(function* fetchUser({ signal, userId = 1 } = {}): Generator<
//       Promise<User>,
//       User,
//       Awaited<User>
//     > {
//       const user = yield JSONPlaceholder.getUser({
//         signal,
//         userId,
//       });
//
//       console.log(user);
//
//       return user;
//     }),
//   }));
//
// export default ThemeStore;
