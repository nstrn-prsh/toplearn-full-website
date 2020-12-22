import { combineReducers } from "redux";
import { coursesReducer } from "./courses";
import { singleCoursesReducer } from "./singleCourse";
import { userReducer } from './user';

export const reducers = combineReducers({
  courses: coursesReducer,
  singleCourse: singleCoursesReducer,
  user: userReducer,
});
