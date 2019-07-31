import { combineReducers } from 'redux';
import { animalReducer } from './animalReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  animals: animalReducer,
  loading: loadingReducer
});

export default rootReducer;