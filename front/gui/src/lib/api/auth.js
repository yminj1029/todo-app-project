import client from './client';

//로그인
export const login = ({ username, password }) => {
  return client.post('rest-auth/login/', { username, password });
};

//회원가입
export const register = ({ username, email, password }) => {
  return client.post('rest-auth/join/', {
    username,
    email,
    password,
  });
};

//로그아웃
export const logout = ({ username }) => {
  return client.post('rest-auth/logout/', { username });
};

// 로그인 상태 확인
export const checkUser = () => {
  return client.register('/user/check');
};
