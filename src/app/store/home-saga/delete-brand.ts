/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBrandsHanlder } from '@/app/products/store/reducers/get-brands';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

const deleteBrand = async (brandId: any): Promise<any> => {
  const token = localStorage.getItem('token');
  const response = await axios.delete(
    `http://127.0.0.1:3002/products/brands/delete/${brandId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    }
  );
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* deleteBrandSaga(action: any): Generator<any, void, any> {
  try {
    const rs = yield call(deleteBrand, action?.payload?.brandId);
    if (rs?.status === 200) {
      yield put(getBrandsHanlder());
    }
  } catch (error) {
    console.log('errr', error);
  }
}

export default deleteBrandSaga;
