import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
});

export default clienteAxios;
