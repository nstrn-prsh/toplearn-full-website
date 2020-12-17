import React, { Fragment, useContext } from "react";
import ContextApi from "./../../../containers/ContextApi";

const Login = () => {
  const context = useContext(ContextApi);

  return (
    <Fragment>
      <main className='client-page'>
        <div className='container-content'>
          <header>
            <h2> ورود به سایت </h2>
          </header>

          <div className='form-layer'>
            <form onSubmit={context.submitBtn}>
              <div className='input-group'>
                <span className='input-group-addon' id='email-address'>
                  <i className='zmdi zmdi-email'></i>
                </span>
                <input
                  type='email'
                  className='form-control'
                  placeholder='ایمیل'
                  aria-describedby='email-address'
                  value={context.Email}
                  onChange={context.emailInput}
                />
              </div>

              <div className='input-group'>
                <span className='input-group-addon' id='password'>
                  <i className='zmdi zmdi-lock'></i>
                </span>
                <input
                  type='password'
                  className='form-control'
                  placeholder='رمز عبور '
                  aria-describedby='password'
                  value={context.Password}
                  onChange={context.passwordInput}
                />
              </div>

              <div className='remember-me'>
                <label>
                  <input type='checkbox' name='' /> مرا بخاطر بسپار{" "}
                </label>
              </div>

              <div className='link'>
                <a href='google.com'>
                  {" "}
                  <i className='zmdi zmdi-lock'></i> رمز عبور خود را فراموش کرده
                  ام !
                </a>
                <a href='google.com'>
                  {" "}
                  <i className='zmdi zmdi-account'></i> عضویت در سایت{" "}
                </a>
              </div>

              <button className='btn btn-success'> ورود به سایت </button>
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Login;
