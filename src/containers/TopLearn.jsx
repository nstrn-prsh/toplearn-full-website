import React from "react";
import { Switch, Route } from "react-router-dom";
import Courses from "./../components/Course/Courses";
import MainLayout from "./../layouts/MainLayout";
import Login from "../components/Sign/Login";
import Register from './../components/Sign/Register';

const Project = (props) => {
  return (
    <MainLayout>
      <Switch>
        <Route path='/' exact component={Courses} />
        <Route path='/login' component={Login} />
        <Route path='/register'  component={Register} />
      </Switch>
    </MainLayout>
  );
};

export default Project;
