import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

// This imports ../reducers/index.js
// index.js combines all of the reducers into one and exports it.
import rootReducer from '../reducers';

// This function will build the store when it is run in App.js
export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      createLogger()
    )
  );
  return store;
}
