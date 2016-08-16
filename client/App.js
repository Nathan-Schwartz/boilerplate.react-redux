import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';

import Home from './containers/homeContainer';
import OtherPage from './components/otherPage';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={Home} />
        <Route path='/OtherPage' component={OtherPage} />
      </Router>
    </Provider>
  );
}
