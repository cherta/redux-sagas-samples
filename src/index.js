import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/App';
import Done from './containers/Done';
import All from './containers/All';
import './index.css';

const store = createStore(reducers);
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <Route path='done' component={Done}/>
        <Route path='all' component={All}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
