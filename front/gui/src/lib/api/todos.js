import client from './client';

//listTodos -> 날짜별로 가져옴
export const listTodos = ({ pikedDate }) => {
  client.get('api', {
    params: { date: pikedDate },
  });
};

//addTodo -> content, nickname 필요함
export const addTodo = ({ content, nickname }) => {
  client.post('api', {
    content: content,
    nickname: nickname,
  });
};

//removeTodo -> id 값으로 삭제
export const removeTodo = (id) => {
  client.delete(`api/${id}`);
};

//updateTodo -> check 갱신
export const updateTodo = ({ id, checked }) => {
  client.patch(`api/${id}/`, { check: !checked });
};
