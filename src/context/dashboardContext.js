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
  // e20.2
  openEditCourseDialog: () => {},
  deleteCourseDialog: () => {},
  sortCourseAsc: () => {},
  sortCourseDes: () => {},
});
