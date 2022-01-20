import { createAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getRaffles as getRafflesAPI } from 'services/raffles';
import { getRaffles as getRafflesReducer } from './index';

export const getRaffles = createAction('raffles/getRafflesAsync');

function* getRafflesSaga() {
  let raffles = [];
  try {
    raffles = yield call(() => getRafflesAPI());
  } catch (error) {
    //
  }

  yield put(getRafflesReducer(raffles));
}

function* rafflesSaga() {
  yield takeLatest(getRaffles, getRafflesSaga);
}

export default rafflesSaga;
