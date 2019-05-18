import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  isAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATED':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.success,
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
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
