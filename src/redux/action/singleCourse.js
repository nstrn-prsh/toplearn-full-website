import { courseAxios } from "./../../services/courseService";

export const getSingleCourse = (courseId) => {
  return async (dispatch) => {
    const { data } = await courseAxios(courseId);
    await dispatch({ type: "GET_SINGLE_COURSE", payload: data.course });
  };
};
