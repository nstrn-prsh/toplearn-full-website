import React, { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <main class='client-page'>
        <div class='container-content'>
          <header>
            <h2> ورود به سایت </h2>
          </header>

          <div class='form-layer'>
            <form action='' method=''>
              <div class='input-group'>
                <span class='input-group-addon' id='email-address'>
                  <i class='zmdi zmdi-email'></i>
                </span>
                <input
                  type='text'
                  class='form-control'
                  placeholder='ایمیل'
                  aria-describedby='email-address'
                />
              </div>

              <div class='input-group'>
                <span class='input-group-addon' id='password'>
                  <i class='zmdi zmdi-lock'></i>
                </span>
                <input
                  type='text'
                  class='form-control'
                  placeholder='رمز عبور '
                  aria-describedby='password'
                />
              </div>

              <div class='remember-me'>
                <label>
                  <input type='checkbox' name='' /> مرا بخاطر بسپار{" "}
                </label>
              </div>

              <div class='link'>
                <a href='google.com'>
                  {" "}
                  <i class='zmdi zmdi-lock'></i> رمز عبور خود را فراموش کرده ام
                  !
                </a>
                <a href='google.com'>
                  {" "}
                  <i class='zmdi zmdi-account'></i> عضویت در سایت{" "}
                </a>
              </div>

              <button class='btn btn-success'> ورود به سایت </button>
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Login;
