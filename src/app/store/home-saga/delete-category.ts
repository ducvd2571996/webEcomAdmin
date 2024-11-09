/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { getCateListHanlder } from '../reducers';

const deleteCategory = async (categoryId: any): Promise<any> => {
  const token = localStorage.getItem('token');
  const response = await axios.delete(
    `http://127.0.0.1:3002/products/categories/${categoryId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    }
  );
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* deleteCategorySaga(action: any): Generator<any, void, any> {
  try {
    const rs = yield call(deleteCategory, action?.payload?.categoryId);
    if (rs?.status === 200) {
      yield put(getCateListHanlder());
    }
  } catch (error) {
    console.log('errr', error);
  }
}

export default deleteCategorySaga;
