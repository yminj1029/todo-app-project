import React, { useState, useCallback, useEffect } from 'react';
import TodoInsert from '../../components/todo/TodoInsert';
import { useSelector, useDispatch } from 'react-redux';
import { insertTodo, listTodos } from '../../modules/todo';

const InsertContainer = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

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
      dispatch(insertTodo({ content: value, nickname: 'name', date: date }));
      // e.preventDefault();
      setValue('');
    },
    [dispatch, value, date]
  );

  // useEffect(() => {
  //   return () => {
  //     // dispatch(listTodos(date));
  //   };
  // });
  return (
    <TodoInsert
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
    ></TodoInsert>
  );
};

export default InsertContainer;
