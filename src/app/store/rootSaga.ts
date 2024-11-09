import { all } from 'redux-saga/effects';
import homeSaga from './home-saga';
import productListSaga from '../products/store/sagas';
import userLoginSaga from '../login/store/sagas';
import orderSaga from '../order/store/sagas';

export default function* rootSaga() {
  yield all([homeSaga(), productListSaga(), userLoginSaga(), orderSaga()]);
}
