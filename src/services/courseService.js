import config from "./config.json";
import http from "./httpService";

export const coursesAxios = () => {
  return http.get(`${config.toplearnapi}/api/courses`);
};

export const courseAxios = ({courseId}) => {
  return http.get(`${config.toplearnapi}/api/course/${courseId}`);
};

/*
courses:
price :6565000
_id :"5fc7e1003ef81808bc9de85c"
title :"آموزش جامع Next.js"
imageUrl :"images/2020-12-17T20:34:41.473Z-0bd162844065411bb0031bb1effeadeb.jpg"
info :"دوره تrtrtrt"
__v :0
*/