import axios from 'axios';

const authenticate = callback => dispatch => axios('http://localhost:8080/user', {
  method: 'get',
  withCredentials: true,
}).then((response) => {
  dispatch({ type: 'AUTHENTICATED', payload: response.data });
}).catch((error) => {
  callback();
  throw (error);
});

const test = () => {
  console.log('hi');
};

export { authenticate, test };
