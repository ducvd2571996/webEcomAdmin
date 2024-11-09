/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

interface OrderState {
  order: any;
  loading: boolean;
  payload: any;
}

const initialState: OrderState = {
  order: null,
  loading: false,
  payload: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getOrderListHanlder: (state, action) => {
      state.loading = true;
      state.payload = action?.payload;
    },
    getOrderListSuccess: (state, action) => {
      state.order = action.payload;
      state.loading = false;
    },
    getOrderListFailure: (state) => {
      state.loading = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createOrdertHanlder: (state, action) => {
      state.loading = true;
      state.payload = action?.payload;
    },
    createOrdertSuccess: (state) => {
      state.loading = false;
    },
    createOrdertFailure: (state) => {
      state.loading = false;
    },
  },
});

export const {
  getOrderListHanlder,
  getOrderListSuccess,
  getOrderListFailure,
  createOrdertHanlder,
  createOrdertSuccess,
  createOrdertFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
