import client from './client';

//listTodos -> 날짜별로 가져옴
export const listTodos = ({ date, username }) => {
  return client.get('api/', {
    params: { date: date, username: username },
  });
};

//addTodo -> content, nickname 필요함
export const addTodo = ({ content, username, date }) => {
  return client.post('api/', { content, username, date });
};

//removeTodo -> id 값으로 삭제
export const removeTodo = (id) => {
  return client.delete(`api/${id}`);
};

//updateTodo -> check 갱신
export const checkTodo = ({ id, check }) => {
  return client.patch(`api/${id}/`, { check: !check });
};
