import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;

//리듀서가 여러개일 경우 하나로 합치는 파일.
