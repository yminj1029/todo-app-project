import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, checkTodo } from '../../modules/todo';
import TodoListItem from '../../components/todo/TodoListItem';

const ItemContainer = ({ id, content, checked }) => {
  const dispatch = useDispatch();
  const onRemove = useCallback(
    (e) => {
      dispatch(removeTodo(id));
    },
    [dispatch, id]
  );

  const onToggle = useCallback(
    (e) => {
      // console.log(check);
      dispatch(checkTodo({ id: id, check: checked }));
    },
    [dispatch, id, checked]
  );

  return (
    <TodoListItem
      id={id}
      content={content}
      checked={checked}
      onRemove={onRemove}
      onToggle={onToggle}
    ></TodoListItem>
  );
};

export default ItemContainer;
