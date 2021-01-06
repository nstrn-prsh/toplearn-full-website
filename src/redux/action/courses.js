import { coursesAxios, newCourse } from "./../../services/courseService";
import { toastSuccess } from "./../../utils/toastMsg";

// data 2 meghdar dare (az server miad):
//  1.arayeii az doreha ke ye adade total courses dare baraye meghdare tamamie dore haii ke toye db set shode
//
export const getAllCourses = () => {
  return async (dispatch) => {
    const { data } = await coursesAxios();
    await dispatch({ type: "INIT", payload: data.courses });
  };
};

//e20.1
export const createNewCourse = (course) => {
  return async (dispatch, getState) => {
    const { data, status } = await newCourse(course);
    if (status === 201) toastSuccess("دوره با موفقیت اضافه شد!");
    await dispatch({
      type: "ADD_COURSE",
      payload: [...getState().courses, data.course],
    });
  };
};
