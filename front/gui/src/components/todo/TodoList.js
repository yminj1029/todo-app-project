import React from 'react';
import '../../lib/styles/TodoList.scss';
import InsertContainer from '../../containers/InsertContainer';
import ItemContainer from '../../containers/ItemContainer';

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
          <h3>할 일이 없습니다</h3>
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
