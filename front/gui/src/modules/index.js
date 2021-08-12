import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import todo, { todoSaga } from './todo';
import date from './date';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
const rootReducer = combineReducers({
  loading,
  todo,
  date,
  auth,
  user,
});

export function* rootSaga() {
  yield all([authSaga(), todoSaga(), userSaga()]);
}
export default rootReducer;

//리듀서가 여러개일 경우 하나로 합치는 파일.
