import axios from 'axios';

const authenticate = () => dispatch => axios('http://localhost:8080/user', {
  method: 'get',
  withCredentials: true,
}).then((response) => {
  dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
}).catch((error) => {
  throw (error);
});

const test = () => {
  console.log('hi');
};

export { authenticate, test };
