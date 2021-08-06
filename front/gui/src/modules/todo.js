import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as todoAPI from '../lib/api/todos';
import { takeLatest } from 'redux-saga/effects';

//액션 타입

const [INSERT_TODO, INSERT_TODO_SUCCESS, INSERT_TODO_FAILURE] =
  createRequestActionTypes('todo/INSERT_TODO');
const [CHECK_TODO, CHECK_TODO_SUCCESS, CHECK_TODO_FAILURE] =
  createRequestActionTypes('todo/CHECK_TODO');
const [REMOVE_TODO, REMOVE_TODO_SUCCESS, REMOVE_TODO_FAILURE] =
  createRequestActionTypes('todo/REMOVE_TODO');

//액션 생성 함수 : 실제 컴포넌트에서 디스패치되는 함수.

export const insertTodo = createAction(
  INSERT_TODO,
  ({ content, nickname, date }) => ({
    content,
    nickname,
    date,
  })
);

export const checkTodo = createAction(CHECK_TODO, ({ id, check }) => ({
  id,
  check,
}));
export const removeTodo = createAction(REMOVE_TODO, (id) => id);

//redux-saga : 비동기적으로 dispatch실행
//takeLates :가장 마지막 action만 처리
const insertTodoSaga = createRequestSaga(INSERT_TODO, todoAPI.addTodo);
export function* insertSaga() {
  yield takeLatest(INSERT_TODO, insertTodoSaga);
}

const checkTodoSaga = createRequestSaga(CHECK_TODO, todoAPI.checkTodo);
export function* checkSaga() {
  yield takeLatest(CHECK_TODO, checkTodoSaga);
}

const removeTodoSaga = createRequestSaga(REMOVE_TODO, todoAPI.removeTodo);
export function* removeSaga() {
  yield takeLatest(REMOVE_TODO, removeTodoSaga);
}
// 초기 상태
const initialState = {
  addTodo: null,
  checkTodo: null,
  removeTodo: null,
  error: null,
};

//리듀서 함수
const todo = handleActions(
  {
    [INSERT_TODO_SUCCESS]: (state, { payload: addTodo }) => ({
      ...state,
      addTodo,
    }),
    [INSERT_TODO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  {
    [CHECK_TODO_SUCCESS]: (state, { payload: checkTodo }) => ({
      ...state,
      checkTodo,
    }),
    [CHECK_TODO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  {
    [REMOVE_TODO_SUCCESS]: (state, { payload: removeTodo }) => ({
      ...state,
      removeTodo,
    }),
    [REMOVE_TODO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

//리듀서 함수 내보내기
export default todo;
