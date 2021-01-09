import React, { useState } from "react";
import { dashboardContext } from "./dashboardContext";
import { paginate } from "./../utils/paginate";
import NewCourseDialog from "./../components/Dashboard/dialog/NewCourseDialog";
import EditCourseDialog from "../components/Dashboard/dialog/EditCourseDialog";

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

  // e20.1
  const openNewCourseDialog = () => setNewCourseDialog(true);
  const closeNewCourseDialog = () => setNewCourseDialog(false);

  // e20.2
  const openEditCourseDialog = (course) => {
    setEditCourseDialog(true);
    setCurrentCourse(course);
  };
  const closeEditCourseDialog = () => setEditCourseDialog(false);

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
      }}
    >
      <NewCourseDialog
        showDialog={newCourseDialog}
        closeDialog={closeNewCourseDialog}
      />
      <EditCourseDialog
        course={currentCourse}
        showDialog={editCourseDialog}
        closeDialog={closeEditCourseDialog}
      />
      {children}
    </dashboardContext.Provider>
  );
};

export default GlobalDashboard;
