import { takeLatest } from 'redux-saga/effects';
import { createOrdertHanlder, getOrderListHanlder } from '../reducers/order';
import createOrderSaga from './create-order';
import getOrdersSaga from './get-order';

export default function* orderSaga() {
  yield takeLatest(createOrdertHanlder.type, createOrderSaga);
  yield takeLatest(getOrderListHanlder.type, getOrdersSaga);
}
