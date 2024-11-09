import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    customers: [],
    loading: false,
    action: { type: '', payload: '' },
  },
  reducers: {
    fetchUserRequest: (state, action) => {
      state.loading = true;
      state.action = action;
    },
    fetchUserSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    fetchUserFailure: (state) => {
      state.loading = false;
    },
    fetchListUserRequest: (state) => {
      state.loading = true;
    },
    fetchListUserSuccess: (state, action) => {
      state.customers = action.payload;
      state.loading = false;
    },
    fetchListUserFailure: (state) => {
      state.loading = false;
    },
    updateUserHandler: (state, action) => {
      console.log('action', action?.payload);

      state.loading = false;
    },
  },
});

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchListUserRequest,
  fetchListUserSuccess,
  fetchListUserFailure,
  updateUserHandler,
} = userSlice.actions;
export default userSlice.reducer;
