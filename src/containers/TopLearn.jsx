import React from "react";
import { Switch, Route } from "react-router-dom";
import Courses from "./../components/Course/Courses";
import MainLayout from "./../layouts/MainLayout";
import Login from "../components/Sign/Login";
import Register from './../components/Sign/Register';
import Archive from './../components/Course/Archive';
import SingleCourse from './../components/Course/SingleCourse';

const Project = (props) => {
  return (
    <MainLayout>
      <Switch>
        <Route path='/' exact component={Courses} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/archive' component={Archive} />
        <Route path='/singleCourse' component={SingleCourse} />
      </Switch>
    </MainLayout>
  );
};

export default Project;
