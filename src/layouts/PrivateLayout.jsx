import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminSideBar from "../components/Dashboard/AdminSideBar";
import AdminTopNav from './../components/Dashboard/AdminTopNav';

const PrivateLayout = ({ children }) => {
  const user = useSelector((state) => state.user);

  return (
    <div id='wrapper'>
      <Helmet>
        <title>داشبورد | تاپلرن</title>
      </Helmet>

      <nav role='navigation' className='navbar navbar-inverse navbar-fixed-top'>
        <div className='navbar-header'>
          <Link className='navbar-brand' to='/dashboard'>
            تاپلرن داشبورد
          </Link>
        </div>

        <AdminTopNav user={user} />
        <AdminSideBar />
      </nav>

      <div id='page-wrapper'>{children}</div>
    </div>
  );
};

export default PrivateLayout;
