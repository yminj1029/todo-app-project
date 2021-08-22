import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import todo, { todoSaga } from './todo';
import date from './date';
import auth, { authSaga } from './auth';
const rootReducer = combineReducers({
  loading,
  todo,
  date,
  auth,
});

export function* rootSaga() {
  yield all([authSaga(), todoSaga()]);
}
export default rootReducer;

//리듀서가 여러개일 경우 하나로 합치는 파일.
