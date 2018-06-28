import { combineReducers } from 'redux';
import isAvailableReducer from './isAvailableReducer';

const allReducers = combineReducers({
  isAvailable: isAvailableReducer,
});

export default allReducers;
