import { takeLatest } from 'redux-saga/effects';
import fetchUserSaga from './user';
import {
  addBrandHanlder,
  addCateHanlder,
  addProductHanlder,
  deleteBrandHanlder,
  deleteCateHanlder,
  deleteProductHanlder,
  fetchListUserRequest,
  fetchUserRequest,
  getCateListHanlder,
  getLatestProductHanlder,
  updateBrandHanlder,
  updateCateHanlder,
  updateProductHanlder,
} from '../reducers';
import getCateListSaga from './get-cate-list';
import getLatestProductsSaga from './get-latest-products';
import addProductSaga from './insert-product';
import updateProductSaga from './update-product';
import deleteProductSaga from './delete-product';
import addCategorySaga from './insert-category';
import updateCategorySaga from './update-cate';
import deleteCategorySaga from './delete-category';
import addBrandSaga from './insert-brand';
import updateBrandSaga from './update-brand';
import deleteBrandSaga from './delete-brand';
import fetchListUserSaga from './get-list-customer';

export default function* userSaga() {
  yield takeLatest(fetchUserRequest.type, fetchUserSaga);
  yield takeLatest(getCateListHanlder.type, getCateListSaga);
  yield takeLatest(getLatestProductHanlder.type, getLatestProductsSaga);
  yield takeLatest(addProductHanlder.type, addProductSaga);
  yield takeLatest(updateProductHanlder.type, updateProductSaga);
  yield takeLatest(deleteProductHanlder.type, deleteProductSaga);
  yield takeLatest(addCateHanlder.type, addCategorySaga);
  yield takeLatest(updateCateHanlder.type, updateCategorySaga);
  yield takeLatest(deleteCateHanlder.type, deleteCategorySaga);
  yield takeLatest(addBrandHanlder.type, addBrandSaga);
  yield takeLatest(updateBrandHanlder.type, updateBrandSaga);
  yield takeLatest(deleteBrandHanlder.type, deleteBrandSaga);
  yield takeLatest(fetchListUserRequest.type, fetchListUserSaga);
}
