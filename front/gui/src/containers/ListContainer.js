import React, { useEffect } from 'react';
import TodoList from '../components/todo/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { listTodos } from '../modules/list';

const ListContainer = () => {
  const dispatch = useDispatch();
  const { date } = useSelector((state) => ({
    date: state.date.date,
  }));

  useEffect(() => {
    dispatch(listTodos(date));
  }, [date]);

  return <TodoList></TodoList>;
};

export default ListContainer;
