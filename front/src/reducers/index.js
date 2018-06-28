import { combineReducers } from 'redux';
import isAvailableReducer from './isAvailableReducer';

const allReducers = combineReducers({
  isAvailableReducer,
});

export default allReducers;
