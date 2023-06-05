import axios from 'axios';
import { API_KEY, BASE_URL } from 'src/constants/api';
const camelize = require('camelize');

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

axiosInstance.interceptors.request.use(
  config => {
    let newUrl;
    const { url } = config;
    if (url.includes('?') && !url.includes(API_KEY)) {
      newUrl = `${url}&key=${API_KEY}`;
    } else if (url.includes(API_KEY)) {
      newUrl = url;
    } else {
      newUrl = `${url}?key=${API_KEY}`;
    }
    config.url = newUrl;
    return Promise.resolve(config);
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => {
    return camelize(response.data);
  },
  error => {
    if (error.response) {
      return Promise.reject(error.response);
    } else if (error.request) {
      return Promise.reject(error.request);
    } else {
      return Promise.reject(error.message);
    }
  }
);

export const apiCaller = async (
  method = 'GET',
  endpoint,
  body,
  params,
  signal
) => {
  return axiosInstance({
    method,
    url: endpoint,
    data: body,
    params,
    signal
  });
};

apiCaller.get = (endpoint, config = {}) => {
  return apiCaller('GET', endpoint, config.body, config.params, config.signal);
};
