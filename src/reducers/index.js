import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'
import todos from './todos';

const todoApp = combineReducers({
  todos,
  routing,
});

export default todoApp;
