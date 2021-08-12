import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import todo, { listSaga, insertSaga, checkSaga, removeSaga } from './todo';
import auth, { authSaga } from './auth';
import loading from './loading';
import date from './date';
const rootReducer = combineReducers({
  todo,
  date,
  loading,
  auth,
});

export function* rootSaga() {
  yield all([authSaga(), listSaga(), insertSaga(), checkSaga(), removeSaga()]);
}
export default rootReducer;

//리듀서가 여러개일 경우 하나로 합치는 파일.
