import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import todos from './todos';
import list, { listSaga } from './list';
import loading from './loading';
import date from './date';
const rootReducer = combineReducers({
  todos,
  list,
  date,
  loading,
});

export function* rootSaga() {
  yield all([listSaga()]);
}
export default rootReducer;

//리듀서가 여러개일 경우 하나로 합치는 파일.
