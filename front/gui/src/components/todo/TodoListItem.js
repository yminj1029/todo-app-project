import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import '../../lib/styles/TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ content, checked, onToggle, onRemove }) => {
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
