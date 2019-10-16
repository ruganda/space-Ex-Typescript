import { combineReducers } from 'redux';
 import launchesREducer from '../reducers/launchesReducer'
export default combineReducers({
  launches: launchesREducer
})