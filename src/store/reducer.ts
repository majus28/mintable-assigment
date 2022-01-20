import { combineReducers } from '@reduxjs/toolkit';
import raffles from 'reducers/raffles/index';

const rootReducers = combineReducers({
  raffles,
});

export default rootReducers;
