import React, { useState, useCallback } from 'react';
import TodoInsert from '../../components/todo/TodoInsert';
import { useSelector, useDispatch } from 'react-redux';
import { insertTodo } from '../../modules/todo';

const InsertContainer = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const username = localStorage.getItem('user');
  const { date, error } = useSelector((state) => ({
    date: state.date.date,
    error: state.todo.error,
  }));

  if (error) {
    //팝업창 띄우든징...나중에 수정
    console.log(error);
  }

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  //폼 등록 이벤트 핸들러
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(insertTodo({ content: value, username: username, date: date }));
      setValue('');
    },
    [dispatch, value, username, date]
  );

  return (
    <TodoInsert
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
    ></TodoInsert>
  );
};

export default InsertContainer;
