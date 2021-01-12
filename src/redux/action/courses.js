import {
  coursesAxios,
  deleteCourse,
  newCourse,
  updateCourse,
} from "./../../services/courseService";
import { toastError, toastSuccess } from "./../../utils/toastMsg";

// data 2 meghdar dare (az server miad):
//  1.arayeii az doreha ke ye adade total courses dare baraye meghdare tamamie dore haii ke toye db set shode
//
export const getAllCourses = () => {
  return async (dispatch) => {
    const { data } = await coursesAxios();
    await dispatch({ type: "INIT", payload: data.courses });
  };
};

// e20.1
export const createNewCourse = (course) => {
  return async (dispatch, getState) => {
    const { data, status } = await newCourse(course);
    if (status === 201) toastSuccess("دوره با موفقیت اضافه شد!");
    await dispatch({
      type: "ADD_COURSE",
      // ye copy az state dore ha begir,
      // dore jadid ro ezafe kon behesh
      // be in sorat state update mishe
      payload: [...getState().courses, data.course],
    });
  };
};

// e20.2
export const handleCourseEdit = (courseId, courseData) => {
  return async (dispatch, getState) => {
    const courses = [...getState().courses];
    const updateCourses = [...courses];

    const courseIndex = updateCourses.findIndex(
      (course) => course._id == courseId
    );
    let course = updateCourses[courseIndex];
    //chon formData darin az method Object estefade mikonim
    course = { ...Object.fromEntries(courseData) };

    updateCourses[courseIndex] = course;

    try {
      await dispatch({ type: "UPDATE_COURSE", payload: [...updateCourses] });
      const { status } = await updateCourse(courseId, courseData);
      if (status === 200) toastSuccess("دوره با موفقیت ویرایش شد!");
    } catch (error) {
      await dispatch({ type: "UPDATE_COURSE", payload: [...courses] });
      toastError("دوباره تلاش کنید!");
    }
  };
};

// e20.3
export const handleCourseDelete = (courseId) => {
  return async (dispatch, getState) => {
    const courses = [...getState().courses];
    const filteredCourses = courses.filter(
      (course) => courseId._id !== courseId
    );
    try {
      await dispatch({ type: "DELETE_COURSE", payload: [...filteredCourses] });
      const { status } = await deleteCourse(courseId);
      if (status === 200) toastSuccess("دوره با موفقیت حذف شد");
      else toastError("دوباره تلاش کن!");
    } catch (error) {
      console.log(error);
      await dispatch({ type: "DELETE_COURSE", payload: [...courses] });
    }
  };
};
