import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './Reducer';
import { loadState, saveState } from './localStorage';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const persistedState = loadState() || {};
const store = createStore(reducer, persistedState, enhancer);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;