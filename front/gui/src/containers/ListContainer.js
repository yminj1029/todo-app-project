import React, { useEffect } from 'react';
import TodoList from '../components/todo/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { listTodos } from '../modules/list';

const ListContainer = () => {
  const dispatch = useDispatch();

  //redux state에 있는 값 꺼내옴
  const { date, data, error } = useSelector((state) => ({
    date: state.date.date,
    data: state.list.todos,
    error: state.list.error,
  }));

  if (error) {
    //팝업창 띄우든징...나중에 수정
    console.log(error);
  }

  //날짜가 바뀌면 새 리스트 보여줌
  useEffect(() => {
    dispatch(listTodos(date));
  }, [date, dispatch]);

  // const onRemove = () => {
  //   console.log('gg');
  //   // console.log('hi!', id);
  // };

  // const onToggle = () => {
  //   console.log('tt');
  //   // console.log(id, !checked);
  // };

  return <TodoList data={data}></TodoList>;
};

export default ListContainer;
