import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as todoAPI from '../lib/api/todos';
import { takeLatest } from 'redux-saga/effects';

//액션 타입 : 상태 변화가 예상될 때 액션을 발생시킨다.
//ex. list_TODO = list/LIST_TODO  LIST_TODO_SUCCESS =list/LIST_TODO_SUCCESS

const [LIST_TODOS, LIST_TODOS_SUCCESS, LIST_TODOS_FAILURE] =
  createRequestActionTypes('list/LIST_TODOS');

//액션 생성 함수 : 실제 컴포넌트에서 디스패치되는 함수.
export const listTodos = createAction(LIST_TODOS, (date) => date);

//redux-saga : 비동기적으로 dispatch실행
//takeLates :가장 마지막 action만 처리
const listTodosSaga = createRequestSaga(LIST_TODOS, todoAPI.listTodos);
export function* listSaga() {
  yield takeLatest(LIST_TODOS, listTodosSaga);
}

// 초기 상태
const initialState = {
  todos: null,
  error: null,
};

//리듀서 함수
const todos = handleActions(
  {
    [LIST_TODOS_SUCCESS]: (state, { payload: todos }) => ({
      ...state,
      todos,
    }),
    [LIST_TODOS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

//리듀서 함수 내보내기
export default todos;
