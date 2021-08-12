import client from './client';

//로그인
export const login = ({ nickname, password }) =>
  client.post('/user/api-auth/login/', { nickname, password });

//회원가입
export const register = ({ nickname, email, name, password }) =>
  client.post('/user/join/', { nickname, email, name, password });

//로그인 상태 확인
