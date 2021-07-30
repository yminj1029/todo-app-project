import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';
import axios from 'axios';

const TodoListItem = ({ id, content, checked }) => {
  const onRemove = () => {
    console.log('hi!', id);
    axios
      .delete(`http://127.0.0.1:8000/api/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onToggle = () => {
    console.log(id, !checked);
    axios
      .patch(`http://127.0.0.1:8000/api/${id}/`, { check: !checked })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={onToggle}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{content}</div>
      </div>
      <div className="remove" onClick={onRemove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
