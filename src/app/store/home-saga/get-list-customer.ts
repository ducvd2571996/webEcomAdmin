/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { fetchListUserSuccess, fetchUserFailure } from '../reducers/user';

const fetchListUserData = async (): Promise<any> => {
  const token = localStorage.getItem('token');
  const response = await axios.get(
    'http://127.0.0.1:3001/users/get-users/all',
    {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    }
  );

  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* fetchListUserSaga(action: any): Generator<any, void, any> {
  try {
    const data = yield call(fetchListUserData);

    yield put(fetchListUserSuccess(data?.data));
  } catch (error) {
    console.log('errr', error);
    yield put(fetchUserFailure());
  }
}

export default fetchListUserSaga;
