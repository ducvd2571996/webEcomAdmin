/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { getCateListHanlder } from '../reducers';

const updateCategory = async (category: any): Promise<any> => {
  const token = localStorage.getItem('token');
  const response = await axios.put(
    `http://127.0.0.1:3002/product/categories/update`,
    {
      ...category,
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
function* updateCategorySaga(action: any): Generator<any, void, any> {
  try {
    const rs = yield call(updateCategory, action?.payload?.category);
    if (rs?.status === 200) {
      yield put(getCateListHanlder());
      action?.payload?.callback();
    }
  } catch (error) {}
}

export default updateCategorySaga;
