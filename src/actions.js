import axios from 'axios';

const authenticate = () => dispatch => axios('http://localhost:8080/user', {
  method: 'get',
  withCredentials: true,
}).then((response) => {
  dispatch({ type: 'AUTHENTICATE_SUCCESS', payload: response.data });
}).catch((error) => {
  dispatch({ type: 'AUTHENTICATE_FAILURE' });
  throw (error);
});

const test = () => {
  console.log('hi');
};

export { authenticate, test };
