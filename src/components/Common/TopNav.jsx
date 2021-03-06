import React from "react";
import { isEmpty } from "lodash";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const TopNav = () => {
  const user = useSelector((state) => state.user);
  
  return (
    <nav>
      <div className='row'>
        <div className='col-sm-6 col-xs-12'>
          <ul>
            <li>
              <NavLink to='/' exact activeStyle={{ color: "lime" }}>
                {" "}
                صفحه اصلی{" "}
              </NavLink>
              <NavLink to='/about' activeStyle={{ color: "lime" }}>
                {" "}
                درباره ما{" "}
              </NavLink>
              <NavLink to='/contact' activeStyle={{ color: "lime" }}>
                {" "}
                تماس با ما{" "}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='col-sm-6 col-xs-12'>
          <div className='clientarea'>
            {!isEmpty(user) ? (
              <div className='loggein '>
                <i className='zmdi zmdi-account'></i>
                <NavLink to='/user-profile' activeStyle={{ color: "lime" }}>
                  {" "}
                  {user.fullname}{" "}
                </NavLink>
                {/* e19.5 */}
                {user.isAdmin ? (
                  <NavLink to='/dashboard'> / پنل ادمین </NavLink>
                ) : null}
                <span>/</span>
                <NavLink to='/logout'> خروج </NavLink>
              </div>
            ) : (
              <div className='signin'>
                <i className='zmdi zmdi-account'></i>
                <NavLink to='/login' activeStyle={{ color: "lime" }}>
                  {" "}
                  ورود{" "}
                </NavLink>{" "}
                <span>/</span>
                <NavLink to='/register' activeStyle={{ color: "lime" }}>
                  {" "}
                  عضویت{" "}
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
