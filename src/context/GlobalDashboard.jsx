import React, { useState, useEffect } from "react";
import { orderBy } from "lodash";
import { dashboardContext } from "./dashboardContext";
import { paginate } from "./../utils/paginate";
import NewCourseDialog from "./../components/Dashboard/dialog/NewCourseDialog";
import EditCourseDialog from "../components/Dashboard/dialog/EditCourseDialog";
import DeleteCourseDialog from "../components/Dashboard/dialog/DeleteCourseDialog";

const GlobalDashboard = ({ courses, children }) => {
  // courseTable
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(5);
  // e20.1
  // component NewCourseDialog
  const [newCourseDialog, setNewCourseDialog] = useState(false);
  // e20.2
  // araye ba meghdare jadid por mishe
  const [currentCourse, setCurrentCourse] = useState({});
  const [editCourseDialog, setEditCourseDialog] = useState(false);
  // e20.3
  const [deleteCourseDialog, setDeleteCourseDialog] = useState(false);
  // 20.4
  const [search, setSearch] = useState("");
  const [courseList, setCourseList] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // e20.1
  const openNewCourseDialog = () => setNewCourseDialog(true);
  const closeNewCourseDialog = () => setNewCourseDialog(false);

  // e20.2
  const openEditCourseDialog = (course) => {
    setEditCourseDialog(true);
    setCurrentCourse(course);
  };
  const closeEditCourseDialog = () => setEditCourseDialog(false);

  // e20.3
  const openDeleteCourseDialog = (course) => {
    setDeleteCourseDialog(true);
    setCurrentCourse(course);
  };
  const closeDeleteCourseDialog = () => setDeleteCourseDialog(false);

  // e20.4
  // con search ye no update to list anjam mide yani state mount mishe bar asase course ha
  useEffect(() => {
    setCourseList(courses);
  }, [courses]);

  const filteredCourses = courseList.filter((course) =>
  course.title.toLowerCase().includes(search)
);

  // e20.5
  // list dore haro bar asase gheymat be sorat soodi/nozoli moratab kon
  const sortCoursesAsc = () => {
    setCourseList(orderBy(courseList, "price", "asc"));
  };
  const sortCoursesDes = () => {
    setCourseList(orderBy(courseList, "price", "desc"));
  };

  const allCourses = paginate(filteredCourses, currentPage, coursePerPage);

  return (
    <dashboardContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        coursePerPage,
        allCourses,
        handlePageChange,
        openNewCourseDialog,
        openEditCourseDialog,
        openDeleteCourseDialog,
        setSearch,
        filteredCourses,
        sortCoursesAsc,
        sortCoursesDes,
      }}
    >
      <NewCourseDialog
        showDialog={newCourseDialog}
        closeDialog={closeNewCourseDialog}
      />

      <EditCourseDialog
        showDialog={editCourseDialog}
        closeDialog={closeEditCourseDialog}
        course={currentCourse}
      />

      <DeleteCourseDialog
        showDialog={deleteCourseDialog}
        closeDialog={closeDeleteCourseDialog}
        course={currentCourse}
      />
      {children}
    </dashboardContext.Provider>
  );
};

export default GlobalDashboard;
