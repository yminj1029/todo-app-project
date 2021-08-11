import React from 'react';
import TodoTemplate from '../components/todo/TodoTemplate';
import CalendarContainer from '../containers/todo/CalendarContainer';
import ListContainer from '../containers/todo/ListContainer';
const TodoPage = () => {
  return (
    <div>
      <TodoTemplate>
        <CalendarContainer></CalendarContainer>
        <ListContainer></ListContainer>
      </TodoTemplate>
    </div>
  );
};

export default TodoPage;
