import axios from 'axios';
import { getToken } from '../token';

const BASE_URL = 'https://10.react.pages.academy/six-cities';
const TIMEOUT = 5000;

const http = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

http.interceptors.request.use((config) => {
  const token = getToken();

  if (!token) {
    return config;
  }

  if (config.headers) {
    config.headers['x-token'] = token;
  } else {
    config.headers = { 'x-token': token };
  }

  return config;
});

// http.interceptors.response.use(
//   (response) => response,
//   (err: AxiosError) => {
//     if (err.response?.status === HttpCode.NonAuthorized) {
//     }
//
//     return Promise.reject(err);
//   }
// );

export default http;
