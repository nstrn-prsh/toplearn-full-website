import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { contextAPI } from "./../../context/contextAPI";

const Login = () => {
  const context = useContext(contextAPI);
  const {
    email,
    password,
    validator,
    handleLogin,
    emailInput,
    passwordInput,
  } = context;
  return (
    <main className='client-page'>
      <div className='container-content'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>تاپلرن|ورود به صفحه شخصی</title>
        </Helmet>

        <header>
          <h2> ورود به سایت </h2>
        </header>
        <div className='form-layer'>
          <form onSubmit={(e) => handleLogin(e)}>
            <div className='input-group'>
              <span className='input-group-addon' id='email-address'>
                <i className='zmdi zmdi-email'></i>
              </span>
              <input
                type='email'
                name='emailIn'
                className='form-control'
                placeholder='ایمیل'
                aria-describedby='email-address'
                value={email}
                onChange={emailInput}
              />
              {validator.current.message("emailIn", email, "required|email")}
            </div>

            <div className='input-group'>
              <span className='input-group-addon' id='password'>
                <i className='zmdi zmdi-lock'></i>
              </span>
              <input
                type='password'
                className='form-control'
                name='passwordIn'
                placeholder='رمز عبور '
                aria-describedby='password'
                value={password}
                onChange={passwordInput}
              />
              {validator.current.message(
                "passwordIn",
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
  );
};

export default Login;
