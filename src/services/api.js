import axios from 'axios';
// import {store} from '../store/index';
// import {signOut} from '../store/modules/auth/actions';

const baseURL = __DEV__
  ? `http://192.168.0.3:3333`
  : 'https://mdezinho.herokuapp.com';

const api = axios.create({
  baseURL: 'https://mdezinho.herokuapp.com',
});

// api.interceptors.response.use(
//   (response) => response,
//   (err) => {
//     const {dispatch} = store;

//     if (String(err.message).includes('401')) {
//       dispatch(signOut());
//     }

//     return Promise.reject(err);
//   },
// );

export default api;
