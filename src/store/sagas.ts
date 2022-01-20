import { all } from 'redux-saga/effects';
import rafflesSaga from 'reducers/raffles/sagas';

export default function* rootSaga() {
  yield all([rafflesSaga()]);
}
