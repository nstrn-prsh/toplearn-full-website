import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { paginate } from "./../utils/paginate";
import { decodeToken } from "./../utils/decodeToken";
import { addUser, clearUser } from "./../redux/action/user";
import Register from "./../components/Sign/Register";
import Login from "./../components/Sign/Login";
import MainLayout from "./../layouts/MainLayout";
import Archive from "./../components/Course/Archive";
import SingleCourse from "./../components/Course/SingleCourse";
import Courses from "./../components/Course/Courses";
import Logout from "./../components/Sign/Logout";
import UserProfile from "./../components/Sign/UserProfile";
import { isEmpty } from "lodash";

const Project = (props) => {
  const courseS = useSelector((state) => state.courses);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // toye currentPage ke mishe safhe 1 ma faghat 8 ta course mikhaiim namayesh bedim
  const courseIndex = paginate(courseS, 1, 8);

  // check kardane enghezaye token
  // age monghazi shode az to local storage hazf kon
  // dar gheire in sorat etelaate token ro bezar to state
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken.payload.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        dispatch(clearUser());
      } else dispatch(addUser(decodedToken.payload.user));
    }
  }, []);

  return (
    <MainLayout>
      <Switch>
        <Route path='/login' component={Login} />
        <Route
          path='/logout'
          render={isEmpty(user) ? <Redirect to='/' /> : <Logout />}
        />
        <Route path='/register' component={Register} />
        <Route path='/archive' component={Archive} />
        {/* e18.5: */}
        <Route path='/singleCourse/:id' component={SingleCourse} />
        <Route path='/user-profile' component={UserProfile} />
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
