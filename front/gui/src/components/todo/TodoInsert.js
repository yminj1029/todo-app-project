import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../../lib/styles/TodoInsert.scss';
import axios from 'axios';

const TodoInsert = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onInsert = () => {
    // axios
    //   .post('http://127.0.0.1:8000/api/', {
    //     content: value,
    //     nickname: 'why',
    //     check: false,
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  const onSubmit = useCallback();
  // (e) => {
  //   onInsert();
  //   // e.preventDefault(); // 새로고침 사용안함.
  //   setValue(''); //value 값 초기화
  // },
  // [onInsert, value]

  //data 값이 유효할때
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
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
