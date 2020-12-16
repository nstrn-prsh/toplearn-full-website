import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import TopNav from "../components/Common/TopNav";
import Footer from "../components/Common/Footer";
import Header from "./../components/Course/Header";
import MainNav from "./../components/Common/MainNav";
import { ToastContainer } from "react-toastify";

const MainLayout = (props) => {
  return (
    <Fragment>
      <div className='landing-layer'>
        <div className='container'>
          <TopNav />
          {props.location.pathname === "/" ? <Header /> : null}
        </div>
      </div>
      <MainNav />
      <main id='home-page'>
        <div className='container'>{props.children}</div>
      </main>
      <Footer />
      <ToastContainer/>
    </Fragment>
  );
};

export default withRouter(MainLayout);
