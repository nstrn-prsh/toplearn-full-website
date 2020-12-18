import React, { Fragment, useContext } from "react";
import { Sugar } from "react-preloaders";
import ContextApi from "./../../../containers/ContextApi";

const Login = () => {
  const context = useContext(ContextApi);
  const {
    loading,
    submitBtn,
    email,
    emailIn,
    password,
    passwordIn,
    validator,
  } = context;
  return (
    <Fragment>
      <main className='client-page'>
        <div className='container-content'>
          <header>
            <h2> ورود به سایت </h2>
          </header>

          {loading ? (
            <Sugar
              customLoading={loading}
              time={0}
              color={"#097938"}
            />
          ) : null}

          <div className='form-layer'>
            <form onSubmit={submitBtn}>
              <div className='input-group'>
                <span className='input-group-addon' id='email-address'>
                  <i className='zmdi zmdi-email'></i>
                </span>
                <input
                  type='email'
                  className='form-control'
                  name='emailLog'
                  placeholder='ایمیل'
                  aria-describedby='email-address'
                  value={email}
                  onChange={emailIn}
                />
                {validator.current.message("emailLog", email, "required|email")}
              </div>

              <div className='input-group'>
                <span className='input-group-addon' id='password'>
                  <i className='zmdi zmdi-lock'></i>
                </span>
                <input
                  type='password'
                  className='form-control'
                  name='passwordLog'
                  placeholder='رمز عبور '
                  aria-describedby='password'
                  value={password}
                  onChange={passwordIn}
                />
                {validator.current.message(
                  "passwordLog",
                  password,
                  "required|min:5"
                )}
              </div>

              <div className='remember-me'>
                <label>
                  <input type='checkbox' name='checkLog' /> مرا بخاطر بسپار{" "}
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
