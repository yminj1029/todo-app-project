import React, { useEffect, useState } from 'react';
import TodoListItem from './TodoListItem';
import '../../lib/styles/TodoList.scss';
import axios from 'axios';
import TodoInsert from './TodoInsert';

const TodoList = ({ date }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  //리스트 불러옴
  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        if (date) {
          const response = await axios.get('http://127.0.0.1:8000/api', {
            params: { date: date },
          });
          setData(response.data);
          // console.log(response.data);
        } else {
          const response = await axios.get('http://127.0.0.1:8000/api', {
            params: { date: '2021-07-31' },
          });
          setData(response.data);
          // console.log(response.data);
          // console.log(date);
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // //대기 중일 때
  if (loading) {
    return <TodoListItem> 대기중...</TodoListItem>;
  }
  //아직 값 설정이 안 됐을 때
  if (!data) {
    return null;
  }

  //data 값이 유효할때
  return (
    <div className="todo-template">
      <div className="app-title">
        <h3>일정 관리</h3>
      </div>
      <div className="content"></div>
      <TodoInsert></TodoInsert>
      <div className="TodoList">
        {data.map((data) => (
          <TodoListItem
            key={data.id}
            id={data.id}
            content={data.content}
            checked={data.check}
          ></TodoListItem>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
