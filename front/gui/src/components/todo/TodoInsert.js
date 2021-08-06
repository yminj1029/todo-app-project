import React from 'react';
import { MdAdd } from 'react-icons/md';
import '../../lib/styles/TodoInsert.scss';

const TodoInsert = ({ onSubmit, onChange, value }) => {
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        name="content"
        value={value}
        onChange={onChange}
      ></input>
      <button type="submit">
        <MdAdd></MdAdd>
      </button>
    </form>
  );
};

export default TodoInsert;
