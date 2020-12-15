import React, { Fragment } from "react";
import MainNav from "./../components/Course/MainNav";
import TopNav from "./../components/Common/TopNav";
import Footer from "./../components/Common/Footer";
import Course from "./../components/Course/Courses";
import Header from './../components/Course/Header';

const App = (props) => {
  return (
    <Fragment>
      <div className='landing-layer'>
        <div className='container'>
          <TopNav />
          <Header/>
        </div>
      </div>
      <MainNav />
      <Course />
      <Footer />
    </Fragment>
  );
};

export default App;
