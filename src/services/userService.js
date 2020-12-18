import config from "./config.json";
import http from "./httpService";

export const registerAxios = (user) => {
  // return http.post(`${config.toplearnapi}/api/register`, JSON.stringify(user));
  return http.post(`${config.localapi}/api/register`, JSON.stringify(user));
};

export const loginAxios = (user) => {
  // return http.post(`${config.toplearnapi}/api/login`, JSON.stringify(user));
  return http.post(`${config.localapi}/api/login`, JSON.stringify(user));
};
