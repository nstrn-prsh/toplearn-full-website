import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <Fragment>
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
              {/* <div className='loggein '>
                <i className='zmdi zmdi-account'></i>
                <a href='google.com'> نسترن پورشریف ، خوش آمدی </a>
              </div> */}
              <div className='signin'>
                <i className='zmdi zmdi-account'></i>
                <NavLink to='/login' activeStyle={{ color: "lime" }}>
                  {" "}
                  ورود{" "}
                </NavLink>{" "}
                /
                <NavLink to='/register' activeStyle={{ color: "lime" }}>
                  {" "}
                  عضویت{" "}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default TopNav;
