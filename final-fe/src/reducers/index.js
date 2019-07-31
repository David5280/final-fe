import { combineReducers } from 'redux';
import { animalReducer } from './animalReducer';
import { loadingReducer, errorReducer } from './loadingReducer';
import { donationsReducer } from './donationsReducer';

const rootReducer = combineReducers({
  animals: animalReducer,
  donations: donationsReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;