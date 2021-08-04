import React from 'react';
import TodoTemplate from '../components/todo/TodoTemplate';

const ListContainer = ({ date, handleDate }) => {
  return (
    <TodoTemplate date={date} changeDate={handleDate}>
      <TodoTemplate></TodoTemplate>
    </TodoTemplate>
  );
};

export default ListContainer;
