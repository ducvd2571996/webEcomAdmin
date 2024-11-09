/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { getCateListHanlder } from '../reducers';

const addCategory = async (cate: any): Promise<any> => {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    `http://127.0.0.1:3002/products/categories/create`,
    {
      ...cate,
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
function* addCategorySaga(action: any): Generator<any, void, any> {
  try {
    const rs = yield call(addCategory, action?.payload?.category);
    if (rs?.status === 200) {
      yield put(getCateListHanlder());
      action?.payload?.callback();
    }
  } catch (error) {
    console.log('errr', error);
  }
}

export default addCategorySaga;
