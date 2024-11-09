/* eslint-disable @typescript-eslint/no-explicit-any */

import { getBrandsHanlder } from '@/app/products/store/reducers/get-brands';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

const addBrand = async (brand: any): Promise<any> => {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    `http://127.0.0.1:3002/products/brands/create`,
    {
      ...brand,
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
function* addBrandSaga(action: any): Generator<any, void, any> {
  try {
    const rs = yield call(addBrand, action?.payload?.brand);
    if (rs?.status === 200) {
      yield put(getBrandsHanlder());
      action?.payload?.callback();
    }
  } catch (error) {
    console.log('errr', error);
  }
}

export default addBrandSaga;
