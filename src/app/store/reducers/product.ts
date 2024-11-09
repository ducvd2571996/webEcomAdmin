import { createSlice } from '@reduxjs/toolkit';

interface CateListState {
  loading: boolean;
}

const initialState: CateListState = {
  loading: false,
};

const productSlice = createSlice({
  name: 'productAction',
  initialState,
  reducers: {
    addProductHanlder: (state, action) => {
      console.log('addProductHanlder--', action.payload);
      state.loading = true;
    },
    updateProductHanlder: (state, action) => {
      console.log('updateProductHanlder--', action.payload);
      state.loading = true;
    },
    deleteProductHanlder: (state, action) => {
      console.log('deleteProductHanlder--', action.payload);
      state.loading = true;
    },
    addCateHanlder: (state, action) => {
      console.log('addCateHanlder--', action.payload);
      state.loading = true;
    },
    updateCateHanlder: (state, action) => {
      console.log('updateCateHanlder--', action.payload);
      state.loading = true;
    },
    deleteCateHanlder: (state, action) => {
      console.log('deleteCateHanlder--', action.payload);
      state.loading = true;
    },
    addBrandHanlder: (state, action) => {
      console.log('addBrandHanlder--', action.payload);
      state.loading = true;
    },
    updateBrandHanlder: (state, action) => {
      console.log('updateBrandHanlder--', action.payload);
      state.loading = true;
    },
    deleteBrandHanlder: (state, action) => {
      console.log('deleteBrandHanlder--', action.payload);
      state.loading = true;
    },
  },
});

export const {
  updateProductHanlder,
  deleteProductHanlder,
  addProductHanlder,
  updateCateHanlder,
  deleteCateHanlder,
  addCateHanlder,
  updateBrandHanlder,
  deleteBrandHanlder,
  addBrandHanlder,
} = productSlice.actions;

export default productSlice.reducer;
