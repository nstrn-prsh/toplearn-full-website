import config from "./config.json";
import http from "./httpService";

//hameye dore ha - get
export const coursesAxios = () => {
  return http.get(`${config.toplearnapi}/api/courses`);
};

// etelaate yek dore - get
export const courseAxios = (courseId) => {
  return http.get(`${config.toplearnapi}/api/course/${courseId}`);
};

// ezafe kardan dore - post
export const newCourse = (course) => {
  return http.post(`${config.toplearnapi}/api/course`, course);
};

// hazfe dore - delete
export const deleteCourse = (courseId) => {
  return http.delete(`${config.toplearnapi}/api/course/${courseId}`);
};

// update dore -put
export const updateCourse = (course, courseId) => {
  return http.put(`${config.toplearnapi}/api/course/${courseId}`, course);
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
