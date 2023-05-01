import axios, { AxiosInstance } from "axios";

export type UseAxios = {
  api: AxiosInstance;
};

const api = axios.create();

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 404) {
      alert("Não encontrado.");
    }
    return Promise.reject(error);
  }
);

export default api;
