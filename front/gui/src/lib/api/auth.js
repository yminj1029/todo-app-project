import client from './client';

//로그인
export const login = ({ username, password }) => {
  return client.post('/user/api-auth/login/', { username, password });
};

//회원가입
export const register = ({ username, email, password }) => {
  return client.post('/user/join/', { username, email, password });
};

//로그인 상태 확인
export const checkUser = () => {
  return client.register('/user/check');
};
