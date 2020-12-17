import config from "./config.json";
import http from "./httpService";

export const registerAxios = (user) => {
  return http.post(`${config.toplearnapi}/api/register`, JSON.stringify(user));
};
