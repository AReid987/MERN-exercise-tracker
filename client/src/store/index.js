import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const store = createStore(null, applyMiddleware(logger));

export default store;
