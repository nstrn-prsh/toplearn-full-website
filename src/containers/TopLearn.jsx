import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
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
import GlobalContext from "../context/GlobalContext";
import Page404 from "./../components/Common/Page404";
import PrivateLayout from "./../layouts/PrivateLayout";
import Dashboard from "./../components/Dashboard/Dashboard";
import CourseTable from "../components/Dashboard/CourseTable";
import GlobalDashboard from "../context/GlobalDashboard";

const Project = () => {
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
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     return (
          // e19.5
          <Switch>
               <Route path={["/dashboard"]}>
                    <PrivateLayout>
                         <Switch>
                              <Route
                                   path='/dashboard/courses'
                                   render={() =>
                                        !isEmpty(user) && user.isAdmin ? (
                                             // e20.1
                                             <GlobalDashboard courses={courseS}>
                                                  <CourseTable />
                                             </GlobalDashboard>
                                        ) : (
                                             <Redirect to='/' />
                                        )
                                   }
                              />
                              <Route
                                   path='/dashboard'
                                   exact
                                   render={() =>
                                        !isEmpty(user) && user.isAdmin ? (
                                             <Dashboard courses={courseS} />
                                        ) : (
                                             <Redirect to='/' />
                                        )
                                   }
                              />
                         </Switch>
                    </PrivateLayout>
               </Route>

               <Route path={["/"]}>
                    <MainLayout>
                         <Switch>
                              <Route
                                   path='/login'
                                   render={() =>
                                        isEmpty(user) ? (
                                             <GlobalContext>
                                                  <Login />
                                             </GlobalContext>
                                        ) : (
                                             <Redirect to='/' />
                                        )
                                   }
                              />

                              <Route
                                   path='/logout'
                                   render={() =>
                                        isEmpty(user) ? (
                                             <Redirect to='/' />
                                        ) : (
                                             <Logout />
                                        )
                                   }
                              />

                              <Route
                                   path='/register'
                                   render={() =>
                                        isEmpty(user) ? (
                                             <GlobalContext>
                                                  <Register />
                                             </GlobalContext>
                                        ) : (
                                             <Redirect to='/' />
                                        )
                                   }
                              />

                              <Route path='/archive' component={Archive} />

                              {/* e18.5: */}
                              <Route
                                   path='/singleCourse/:id'
                                   component={SingleCourse}
                              />

                              <Route
                                   path='/user-profile'
                                   component={UserProfile}
                              />

                              <Route
                                   path='/'
                                   exact
                                   render={() =>
                                        courseIndex.length > 0 ? (
                                             <Courses
                                                  someCourses={courseIndex}
                                             />
                                        ) : (
                                             <h2
                                                  style={{
                                                       textAlign: "center",
                                                       margin: "2em",
                                                  }}
                                             >
                                                  دوره ی مورد نظر یافت نشد
                                             </h2>
                                        )
                                   }
                              />

                              <Route path='*' exact component={Page404} />
                         </Switch>
                    </MainLayout>
               </Route>
          </Switch>
     );
};

export default Project;
