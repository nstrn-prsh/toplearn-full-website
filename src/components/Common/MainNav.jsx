import React, { Fragment } from "react";

const MainNav = () => {
  return (
    <Fragment>
      <div className='main-menu'>
        <div className='container'>
          <nav>
            <span className='responsive-sign'>
              <i className='zmdi zmdi-menu'></i>
            </span>
            <ul>
              <li>
                <a href='google.com'> برنامه نویسی موبایل </a>
                <ul>
                  <li>
                    <a href='google.com'> زامارین Xamarin </a>
                  </li>
                  <li>
                    <a href='google.com'> react Native </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='google.com'> برنامه نویسی وب </a>
                <ul>
                  <li>
                    <a href='google.com'> Asp.net WebForms </a>
                  </li>
                  <li>
                    <a href='google.com'> Asp.net MVC </a>
                  </li>
                  <li>
                    <a href='google.com'> PHP MVC </a>
                  </li>
                  <li>
                    <a href='google.com'> PHP FrameWorks </a>
                  </li>
                  <li>
                    <a href='google.com'> Asp.net Core </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='google.com'> برنامه نویسی تحت ویندوز </a>
              </li>
              <li>
                <a href='google.com'> طراحی سایت </a>
                <ul>
                  <li>
                    <a href='google.com'> طراحی سایت </a>
                  </li>
                  <li>
                    <a href='google.com'> Bootstrap </a>
                  </li>
                  <li>
                    <a href='google.com'> Angular </a>
                  </li>
                  <li>
                    <a href='google.com'> react </a>
                  </li>
                  <li>
                    <a href='google.com'> Jquery </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='google.com'> بانک های اطلاعاتی </a>
              </li>
              <li>
                <a href='google.com'> سئو </a>
              </li>
              <li>
                <a href='google.com'> سیستم عامل </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default MainNav;
