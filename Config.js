import axios from 'axios';

export const baseURL = axios.create({
  baseURL: "http://192.168.10.102:5000/api",
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});
export const ImageConfig = "http://192.168.10.102:5000"