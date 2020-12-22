import { courseAxios } from "./../../services/courseService";

// data 2 meghdar dare :
//  1.arayeii az doreha ke ye adade total courses dare baraye meghdare tamamie dore haii ke toye db set shode
//
export const getAllCourses = () => {
  return async (dispatch) => {
    const { data } = await courseAxios();
    await dispatch({ type: "INIT", payload: data.courses });
  };
};
