import React, { useEffect } from 'react';
import TodoList from '../../components/todo/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { listTodos } from '../../modules/todo';

const ListContainer = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem('user');
  //redux state에 있는 값 꺼내옴
  const { date, data, error } = useSelector((state) => ({
    date: state.date.date,
    data: state.todo.todos,
    error: state.todo.error,
  }));

  //날짜가 바뀌면 새 리스트 보여줌
  useEffect(() => {
    dispatch(listTodos({ date: date, username: username }));
  }, [date, username, dispatch]);

  if (error) {
    return <div className="error">로그인 후 사용 가능합니다</div>;
  }
  return <TodoList data={data} date={date}></TodoList>;
};

export default ListContainer;
