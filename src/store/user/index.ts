// import { types } from 'mobx-state-tree';
//
// const ProductStore = types.model('Products', {
//   id: types.string,
//   price: types.string,
// });
//
// const UserStore = types
//   .model('UserStore', {
//     firstName: types.string,
//     lastName: types.string,
//     products: types.map(ProductStore),
//   })
//   .actions((self) => ({
//     setFirstName(firsName: string) {
//       self.firstName = firsName;
//     },
//     setLastName(lastName: string) {
//       self.lastName = lastName;
//     },
//   }))
//   .views((self) => ({
//     get fullName() {
//       return `${self.firstName} ${self.lastName}`;
//     },
//   }));
//
// export default UserStore;
