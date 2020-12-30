import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { contextAPI } from "./../../context/contextAPI";

const Register = () => {
  const context = useContext(contextAPI);
  const {
    fullname,
    email,
    password,
    policy,
    validator,
    fullNameInput,
    emailInput,
    passwordInput,
    policyCheck,
    handleRegister,
  } = context;

  return (
    <main className='client-page'>
      <div className='container-content'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>تاپلرن|عضویت در سایت</title>
        </Helmet>

        <header>
          <h2> عضویت در سایت </h2>
        </header>
        <div className='form-layer'>
          <form onSubmit={(e) => handleRegister(e)}>
            <div className='input-group'>
              <span className='input-group-addon' id='username'>
                <i className='zmdi zmdi-account'></i>
              </span>
              <input
                type='text'
                name='fullnameIn'
                className='form-control'
                placeholder='نام و نام خانوادگی'
                aria-describedby='username'
                value={fullname}
                onChange={fullNameInput}
              />
              {validator.current.message(
                "fullnameIn",
                fullname,
                "required|min:5"
              )}
            </div>

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
                name='passwordIn'
                className='form-control'
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

            <div className='accept-rules'>
              <label>
                <input
                  type='checkbox'
                  name='policyReg'
                  value={policy}
                  onChange={policyCheck}
                />{" "}
                قوانین و مقررات سایت را میپذیرم{" "}
              </label>
              {validator.current.message("policyReg", policy, "required")}
            </div>

            <div className='link'>
              <a href='google.com'>
                {" "}
                <i className='zmdi zmdi-assignment'></i> قوانین و مقررات سایت !
              </a>
              <a href='google.com'>
                {" "}
                <i className='zmdi zmdi-account'></i> ورود به سایت{" "}
              </a>
            </div>

            <button className='btn btn-success'> عضویت در سایت </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
