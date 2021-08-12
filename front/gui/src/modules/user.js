import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; //새로 고침 후 임시 로그인 처리
//회원 정보 확인
const [USER_CHECK, USER_CHECK_SUCCESS, USER_CHECK_FAILURE] =
  createRequestActionTypes('user/USER_CHECK');

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const userCheck = createAction(USER_CHECK);

const userCheckSaga = createRequestSaga(USER_CHECK, authAPI.checkUser);
export function* userSaga() {
  yield takeLatest(USER_CHECK, userCheckSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [USER_CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [USER_CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
  },
  initialState
);
