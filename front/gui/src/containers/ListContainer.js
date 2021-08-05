import React, { useEffect } from 'react';
import TodoList from '../components/todo/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { listTodos } from '../modules/list';

const ListContainer = () => {
  const dispatch = useDispatch();

  //redux state에 있는 값 꺼내옴
  const { date, data } = useSelector((state) => ({
    date: state.date.date,
    data: state.list.todos,
  }));

  //리스트 보여줌
  useEffect(() => {
    dispatch(listTodos(date));
  }, [date, dispatch]);

  return <TodoList data={data}></TodoList>;
};

export default ListContainer;
