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

  if (error) {
    return <div className="error">로그인 후 사용 가능합니다</div>;
  }

  return (
    <TodoInsert
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
    ></TodoInsert>
  );
};

export default InsertContainer;
