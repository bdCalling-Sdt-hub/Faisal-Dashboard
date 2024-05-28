import axios from 'axios';

export const baseURL = axios.create({
  baseURL: "http://103.161.9.43:3000/api",
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const ImageConfig = "http://103.161.9.43:3000"