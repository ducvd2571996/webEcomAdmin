import { takeLatest } from 'redux-saga/effects';
import { getOrderListHanlder } from '../reducers/order';

import getOrdersSaga from './get-order';

export default function* orderSaga() {
  yield takeLatest(getOrderListHanlder.type, getOrdersSaga);
}
