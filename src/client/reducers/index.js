import { combineReducers } from 'redux';
import home from './home';
import { routeReducer } from 'react-router-redux';

const reducer = combineReducers({
  home,
  routing: routeReducer,
});

export default reducer;
