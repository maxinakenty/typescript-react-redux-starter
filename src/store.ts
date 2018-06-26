import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import IS_DEVELOPMENT from '../tools/constants';
import rootReducer from './ducks';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  IS_DEVELOPMENT
    ? composeWithDevTools(applyMiddleware(thunk, middleware))
    : applyMiddleware(thunk, middleware),
);

export default store;
