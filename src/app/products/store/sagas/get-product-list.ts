/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put } from 'redux-saga/effects';
import {
  getProductListFailure,
  getProductListSuccess,
} from '../reducers/get-product';
import axios from 'axios';
import { GetProductListPayload, Product } from '../../../model';

// Interface for Product List Data
interface ProductListData {
  items: Array<Product>;
}

// Interface for API Response
interface DataType {
  data: ProductListData;
  status: number;
  message: string;
}

interface ActionType {
  type: string;
  payload: GetProductListPayload;
}

const fetchProductsApi = async () => {
  const response = await axios.get(
    'http://127.0.0.1:3002/products/top-product/get-top'
  );

  return response.data;
};

function* getProductListSaga(): Generator<any, void, DataType> {
  try {
    const response = yield call(fetchProductsApi);
    console.log('API response:', response);
    if (response?.status === 200) {
      yield put(getProductListSuccess(response?.data));
    } else {
      yield put(getProductListFailure());
    }
  } catch (error) {
    console.log('Error occurred while fetching products:', error);
    yield put(getProductListFailure());
  }
}

export default getProductListSaga;
