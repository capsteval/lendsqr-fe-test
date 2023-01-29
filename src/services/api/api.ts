/** @format */

import axios, { AxiosInstance } from "axios";

const axiosParams = {
  baseURL: process.env.REACT_APP_BASE_URL,
};
const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config = {}) => axios.get(url, config),
    post: (url: string, body: any, config = {}) => axios.post(url, body, config),
    put: (url: string, body: any, config = {}) => axios.put(url, body, config),
    patch: (url: string, body: any, config = {}) => axios.patch(url, body, config),
  };
};
export default api(axiosInstance);
