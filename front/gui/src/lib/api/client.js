import axios from 'axios';

const client = () => {
  const defaultOptions = {
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  let instance = axios.create(defaultOptions);
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Token ${token}` : '';
    return config;
  });
  return instance;
};

export default client();
