import config from "./config.json";
import http from "./httpService";

export const courseAxios = () => {
  return http.get(`${config.toplearnapi}/api/courses`);
};