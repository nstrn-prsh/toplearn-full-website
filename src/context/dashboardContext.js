import { createContext } from "react";

export const dashboardContext = createContext({
  currentPage: 1,
  PerPage: 5,
  CurrentCourse: {},
  allCourses: [], // CourseData ?
  filteredCourses: [],
  handlePageChange: () => {},
  setCurrentPage: () => {},
  setSearch: () => {},
  //e20.1
  openNewCourseDialog: () => {},
  closeNewCourseDialog: () => {},
  editCourseDialog: () => {},
  deleteCourseDialog: () => {},
  sortCourseAsc: () => {},
  sortCourseDes: () => {},
});
