import { api, UseAxios } from "services";

const useAxios = (): UseAxios => {
  return { api };
};

export default useAxios;
