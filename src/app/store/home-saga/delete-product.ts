/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProductListHanlder } from '@/app/products/store/reducers/get-product';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

const deleteProduct = async (productId: any): Promise<any> => {
  const token = localStorage.getItem('token');
  const response = await axios.delete(
    `http://127.0.0.1:3002/products/delete-by-id/${productId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    }
  );
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* deleteProductSaga(action: any): Generator<any, void, any> {
  try {
    const rs = yield call(deleteProduct, action?.payload?.productId);
    if (rs?.status === 200) {
      yield put(getProductListHanlder({}));
    }
  } catch (error) {
    console.log('errr', error);
  }
}

export default deleteProductSaga;
