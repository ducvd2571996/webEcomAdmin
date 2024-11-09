/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { getOrderListFailure, getOrderListSuccess } from '../reducers/order';

interface DataType {
  data: any;
  status: number;
  message: string;
}

interface ActionType {
  type: string;
  payload: any;
}

const fetchOrdersApi = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(
    `http://127.0.0.1:3004/order/get-order/all`,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    }
  );

  return response.data; // Assuming data contains the product list
};

function* getOrdersSaga(): Generator<any, void, DataType> {
  try {
    const rs = yield call(fetchOrdersApi);
    if (rs?.status === 200) {
      yield put(getOrderListSuccess(rs?.data));
    } else {
      yield put(getOrderListFailure());
    }
  } catch (error) {
    console.log('errr', error);
    yield put(getOrderListFailure());
  }
}

export default getOrdersSaga;
