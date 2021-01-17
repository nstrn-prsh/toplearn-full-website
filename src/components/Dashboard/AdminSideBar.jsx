import React from "react";
import { Link, withRouter } from "react-router-dom";

const AdminSideBar = ({ location }) => {
     return (
          <ul className='nav navbar-nav side-nav' style={{ height: "100vh" }}>
               <li
                    className={
                         location.pathname === "/dashboard" ? "active" : ""
                    }
               >
                    <Link to='/dashboard'>
                         <span>
                              <i className='fa fa-fw fa-dashboard'></i>
                              داشبورد
                         </span>
                    </Link>
               </li>
               <li
                    className={
                         location.pathname === "/dashboard/courses"
                              ? "active"
                              : ""
                    }
               >
                    <Link to='/dashboard/courses'>
                         <span>
                              <i className='fa fa-fw fa-graduation-cap'></i>
                              دوره ها
                         </span>
                    </Link>
               </li>
          </ul>
     );
};

export default withRouter(AdminSideBar);
