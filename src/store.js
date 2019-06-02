import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  isAuthenticating: true,
  isAuthenticated: false,
  courses: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticating: false,
        isAuthenticated: true,
      };
    case 'AUTHENTICATE_FAILURE':
      return {
        ...state,
        isAuthenticating: false,
      };
    case 'COURSES_SUCCESS':
      return {
        ...state,
        courses: action.payload,
      };
    case 'COURSES_FAILURE':
      return {
        ...state,
      };
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // eslint-disable-next-line no-underscore-dangle
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
