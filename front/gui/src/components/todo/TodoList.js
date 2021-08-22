import React from 'react';
import '../../lib/styles/TodoList.scss';
import InsertContainer from '../../containers/todo/InsertContainer';
import ItemContainer from '../../containers/todo/ItemContainer';

const TodoList = ({ data, date }) => {
  function isEmptyArr(arr) {
    if (Array.isArray(arr) && arr.length === 0) {
      return true;
    }
    return false;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="todo-template">
      <div className="app-title">
        <h3>{date} 일정</h3>
      </div>
      <div className="content"></div>
      <InsertContainer></InsertContainer>
      <div className="TodoList">
        {isEmptyArr(data) ? (
          <div className="error">할 일을 추가해주세요</div>
        ) : (
          data.map((data) => (
            <ItemContainer
              key={data.id}
              id={data.id}
              content={data.content}
              checked={data.check}
            ></ItemContainer>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
