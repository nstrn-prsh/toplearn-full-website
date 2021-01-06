import React, { useState } from "react";
import { dashboardContext } from "./dashboardContext";
import { paginate } from "./../utils/paginate";
import NewCourseDialog from "./../components/Dashboard/dialog/NewCourseDialog";

const GlobalDashboard = ({ courses, children }) => {
  const [newCourseDialog, setNewCourseDialog] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(5);

  const openNewCourseDialog = () => setNewCourseDialog(true);
  const closeNewCourseDialog = () => setNewCourseDialog(false);

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
      }}
    >
      <NewCourseDialog
        showDialog={newCourseDialog}
        closeDialog={closeNewCourseDialog}
      />
      {children}
    </dashboardContext.Provider>
  );
};

export default GlobalDashboard;
