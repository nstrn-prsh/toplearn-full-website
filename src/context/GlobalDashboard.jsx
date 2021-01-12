import React, { useState } from "react";
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

  const allCourses = paginate(courses, currentPage, coursePerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
