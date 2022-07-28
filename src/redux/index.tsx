import { combineReducers } from 'redux';
import counter from './counter';
// import modal from './modal';
// import users from './users';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
