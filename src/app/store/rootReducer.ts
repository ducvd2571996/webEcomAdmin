import { combineReducers } from '@reduxjs/toolkit';
// Import your slice reducers here
import loginReducer from '../login/store/reducers/login';
import brandsReducer from '../products/store/reducers/get-brands';
import productListReducer from '../products/store/reducers/get-product';
import orderReducer from '../order/store/reducers/order';
import cateListReducer from './reducers/get-cate-list';
import latestProductReducer from './reducers/get-latest-product';
import userReducer from './reducers/user';
import productReducer from './reducers/product';
const rootReducer = combineReducers({
  user: userReducer,
  cateList: cateListReducer,
  productList: productListReducer,
  latestProduct: latestProductReducer,
  brands: brandsReducer,
  login: loginReducer,
  order: orderReducer,
  product: productReducer,
});

export default rootReducer;
