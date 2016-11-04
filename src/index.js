import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas';
import Done from './containers/Done';
import All from './containers/All';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Done} />
      <Route path='all' component={All} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
