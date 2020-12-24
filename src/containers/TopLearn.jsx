import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { paginate } from "./../utils/paginate";
import Register from "./../components/Sign/Register";
import Login from "./../components/Sign/Login";
import MainLayout from "./../layouts/MainLayout";
import Archive from "./../components/Course/Archive";
import SingleCourse from "./../components/Course/SingleCourse";
import Courses from "./../components/Course/Courses";

const Project = (props) => {
  const courseS = useSelector((state) => state.courses);
  // toye currentPage ke mishe safhe 1 ma faghat 8 ta course mikhaiim namayesh bedim
  const courseIndex = paginate(courseS, 1, 8);
  
  return (
    <MainLayout>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/archive' component={Archive} />
        {/* e18.5: */}
        <Route path='/singleCourse/:id' component={SingleCourse} />
        <Route
          path='/'
          exact
          render={() => <Courses someCourses={courseIndex} />}
        />
      </Switch>
    </MainLayout>
  );
};

export default Project;
