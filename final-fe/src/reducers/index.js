import { combineReducers } from 'redux';
import { animalReducer } from './animalReducer';
import { loadingReducer, errorReducer } from './loadingReducer';

const rootReducer = combineReducers({
  animals: animalReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;