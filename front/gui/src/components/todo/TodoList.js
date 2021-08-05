import React from 'react';
import TodoListItem from './TodoListItem';
import '../../lib/styles/TodoList.scss';
import TodoInsert from './TodoInsert';

const TodoList = ({ data }) => {
  if (!data) {
    return null;
  }

  //data 값이 유효할때
  return (
    <div className="todo-template">
      <div className="app-title">
        <h3>일정 관리</h3>
      </div>
      <div className="content"></div>
      <TodoInsert></TodoInsert>
      <div className="TodoList">
        {data.map((data) => (
          <TodoListItem
            key={data.id}
            id={data.id}
            content={data.content}
            checked={data.check}
          ></TodoListItem>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
