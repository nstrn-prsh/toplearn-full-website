import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./../components/Sign/Register";
import Login from "./../components/Sign/Login";
import MainLayout from './../layouts/MainLayout'
import Archive from './../components/Course/Archive';
import SingleCourse from './../components/Course/SingleCourse';
import Courses from './../components/Course/Courses';


const Project = (props) => {
  return (
    <MainLayout>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/archive' component={Archive} />
        <Route path='/singleCourse' component={SingleCourse} />
        <Route path='/' exact component={Courses} />
      </Switch>
    </MainLayout>
  );
};

export default Project;
