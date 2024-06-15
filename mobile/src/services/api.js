import axios from 'axios';

const api = axios.create({
  baseURL: 'http://${seu IP de rede}:3333'
});

export default api;