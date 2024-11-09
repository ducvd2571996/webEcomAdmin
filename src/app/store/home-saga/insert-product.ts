/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProductListHanlder } from '@/app/products/store/reducers/get-product';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

const addProduct = async (product: any): Promise<any> => {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    `http://127.0.0.1:3002/products`,
    {
      ...product,
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
function* addProductSaga(action: any): Generator<any, void, any> {
  try {
    const rs = yield call(addProduct, action?.payload?.product);
    if (rs?.status === 200) {
      yield put(getProductListHanlder({}));
      action?.payload?.callback();
    }
  } catch (error) {
    console.log('errr', error);
  }
}

export default addProductSaga;
