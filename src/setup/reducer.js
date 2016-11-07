import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'
import { reducer as todos } from '../todos';

const app = combineReducers({
  todos,
  routing,
});

export default app;
