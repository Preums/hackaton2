import { combineReducers } from 'redux';
import isAvailableReducer from './isAvailableReducer';
import filtersReducer from './filtersReducer';

const allReducers = combineReducers({
  isAvailable: isAvailableReducer,
  filters: filtersReducer,
});

export default allReducers;
