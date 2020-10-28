import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import reducer from './Reducer';
import { loadState } from './localStorage';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const persistedState = loadState() || {};
const store = createStore(reducer, persistedState, enhancer);
sagaMiddleware.run(rootSaga);
export default store;