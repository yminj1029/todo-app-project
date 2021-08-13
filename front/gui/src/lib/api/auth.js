import client from './client';

//로그인
export const login = ({ username, password }) => {
  return client.post('rest-auth/login/', { username, password });
};

//회원가입
export const register = ({ username, email, password1, password2 }) => {
  return client.post('rest-auth/register/', {
    username,
    email,
    password1,
    password2,
  });
};

//로그인 상태 확인
export const checkUser = () => {
  return client.register('/user/check');
};
