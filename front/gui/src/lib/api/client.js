import axios from 'axios';

const token = localStorage.getItem('token');

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    Authorization: token,
  },
});

export default client;
