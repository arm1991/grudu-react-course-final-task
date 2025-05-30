import axios from 'axios';

export const { SERVER_URL } = process.env;

const $api = axios.create({ baseURL: SERVER_URL });

$api.interceptors.request.use((config) => {
  return config;
});

export default $api;
