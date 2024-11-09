/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { fetchListUserRequest } from '../reducers';

const updateCustomer = async (customer: any): Promise<any> => {
  const token = localStorage.getItem('token');
  const response = await axios.put(
    `http://127.0.0.1:3001/users/update`,
    {
      ...customer,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    }
  );
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* updateCustomerSaga(action: any): Generator<any, void, any> {
  try {
    const rs = yield call(updateCustomer, action?.payload?.customer);
    if (rs?.status === 200) {
      yield put(fetchListUserRequest());
      action?.payload?.callback();
    }
  } catch (error) {}
}

export default updateCustomerSaga;
