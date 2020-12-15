import React, { Fragment } from "react";
import TopNav from "./../components/Common/TopNav";
import Footer from "./../components/Common/Footer";
import Header from "./../components/Course/Header";
import MainNav from "./../components/Course/MainNav";

const MainLayout = (props) => {
  return (
    <Fragment>
      <div className='landing-layer'>
        <div className='container'>
          <TopNav />
          <Header />
        </div>
      </div>
      <MainNav />
      <main id='home-page'>
        <div className='container'>{props.children}</div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
