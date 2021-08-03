import moment from 'moment';
// import { createRequestActionTypes } from '../lib/createRequestSaga';
import * as todoAPI from '../lib/api/todos';

//액션 타입 : 상태 변화가 예상될 때 액션을 발생시킨다.
const CHANGE_DATE = 'todo/CHANGE_DATE'; //날짜 변경
const INSERT_TODO = 'todo/INSERT_TODO'; //todo입력
const TOGGLE_TODO = 'todo/TOGGLE_TODO'; //todo check변경
const REMOVE_TODO = 'todo/REMOVE_TODO'; //todo 삭제

//requestSaga 사용

//액션 생성 함수 : 실제 컴포넌트에서 디스패치되는 함수.

export const changeDate = (pikedDate) => ({
  type: CHANGE_DATE,
  pikedDate,
});

export const insertTodo = ({ content, nickname }) => ({
  type: INSERT_TODO,
  content,
  nickname,
});

export const toggleTodo = ({ id }) => ({
  type: TOGGLE_TODO,
  id,
});

export const removeTodo = ({ id }) => ({
  type: REMOVE_TODO,
  id,
});

// 초기 상태
const initialState = {
  todos: {
    pikedDate: moment().format('YYYY-MM-DD'),
  },
  addTodo: {
    content: '',
    nickname: '',
  },
};

//리듀서 함수
function todo(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DATE:
      return {
        ...state,
        todos: action.pikedDate,
      };
    case INSERT_TODO:
      return {
        ...state,
        addTodo: action,
      };
    case TOGGLE_TODO:
      return {
        ...state,
      };
    case REMOVE_TODO:
      return {
        ...state,
      };
    default:
      return state;
  }
}

//리듀서 함수 내보내기
export default todo;
