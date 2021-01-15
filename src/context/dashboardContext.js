import { createContext } from "react";

export const dashboardContext = createContext({
  currentPage: 1,
  PerPage: 5,
  CurrentCourse: {},
  allCourses: [], // CourseData ?
  handlePageChange: () => {},
  setCurrentPage: () => {},
  //e20.1
  openNewCourseDialog: () => {},
  // e20.2
  openEditCourseDialog: () => {},
  // e20.3
  openDeleteCourseDialog: () => {},
  // e20.4
  filteredCourses: [],
  setSearch: () => {},
  // e20.5
  sortCoursesAsc: () => {},
  sortCoursesDes: () => {},
  // e20.7
  validator: null,
});
