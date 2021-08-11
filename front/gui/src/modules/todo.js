import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as todoAPI from '../lib/api/todos';
import { takeLatest } from 'redux-saga/effects';

//액션 타입

//ex. list_TODO = list/LIST_TODO  LIST_TODO_SUCCESS =list/LIST_TODO_SUCCESS

const [LIST_TODOS, LIST_TODOS_SUCCESS, LIST_TODOS_FAILURE] =
  createRequestActionTypes('list/LIST_TODOS');
const [INSERT_TODO, INSERT_TODO_SUCCESS, INSERT_TODO_FAILURE] =
  createRequestActionTypes('todo/INSERT_TODO');
const [CHECK_TODO, CHECK_TODO_SUCCESS, CHECK_TODO_FAILURE] =
  createRequestActionTypes('todo/CHECK_TODO');
const [REMOVE_TODO, REMOVE_TODO_SUCCESS, REMOVE_TODO_FAILURE] =
  createRequestActionTypes('todo/REMOVE_TODO');

//액션 생성 함수 : 실제 컴포넌트에서 디스패치되는 함수.
export const listTodos = createAction(LIST_TODOS, (date) => date);

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
const listTodosSaga = createRequestSaga(LIST_TODOS, todoAPI.listTodos);
export function* listSaga() {
  yield takeLatest(LIST_TODOS, listTodosSaga);
}
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
  todos: null,
  // checkTodo: null,
  // removeTodo: null,
  // type: null,
  error: null,
};

//리듀서 함수
const todo = handleActions(
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
  {
    [INSERT_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
    [INSERT_TODO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  {
    [CHECK_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, check: !todo.check } : todo
      ),
    }),
    [CHECK_TODO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  {
    [REMOVE_TODO_SUCCESS]: (state, { payload: todos }) => ({
      ...state,
      todos,
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
