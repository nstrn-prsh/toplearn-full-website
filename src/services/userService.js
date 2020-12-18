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


// baraye kar ba local host aval mongodb ro nasb mikonim
// bad mongo compass ro nasb mikonim
// (service mongodb bayad dar hale running bashe 
//   az windows+r Service.msc mishe check kard)
// bad toye masire server npm start ro mizanim
// ke port servero behemoon mide
// (age posheye node-modules nabood aval npm i)
// vaghti server dar hale run bashe proje ham run mikonim
// hala mishe sabte nam kard va varede account shod 
