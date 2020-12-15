import React, { Fragment } from "react";

const TopNav = () => {
  return (
    <Fragment>
      <nav>
        <div className='row'>
          <div className='col-sm-6 col-xs-12'>
            <ul>
              <li>
                <a href='google.com'> همکاری در فروش </a>
                <a href='google.com'> درباره ما </a>
                <a href='google.com'> تماس با ما </a>
              </li>
            </ul>
          </div>
          <div className='col-sm-6 col-xs-12'>
            <div className='clientarea'>
              <div className='loggein '>
                <i className='zmdi zmdi-account'></i>
                <a href='google.com'> نسترن پورشریف ، خوش آمدی </a>
              </div>
              <div className='signin hidden'>
                <i className='zmdi zmdi-account'></i>
                <a href='google.com'> ورود </a> /
                <a href='google.com'> عضویت </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default TopNav;
