// we use functions here with jsx
import React, { useContext, Fragment } from "react";
import { Sugar } from "react-preloaders";
import ContextApi from "../../../containers/ContextApi";

const Register = () => {
  const context = useContext(ContextApi);
  const {
    loading,
    validator,
    submitButton,
    fullname,
    fullNameInput,
    email,
    emailInput,
    password,
    passwordInput,
    policy,
    policyCheck,
  } = context;

  return (
    <Fragment>
      <main className='client-page'>
        <div className='container-content'>
          <header>
            <h2> عضویت در سایت </h2>
          </header>

          {loading ? (
            <Sugar
              customLoading={loading}
              time={0}
              color={"#097938"}
            />
          ) : null}

          <div className='form-layer'>
            <form onSubmit={submitButton}>
              <div className='input-group'>
                <span className='input-group-addon' id='username'>
                  <i className='zmdi zmdi-account'></i>
                </span>
                <input
                  type='text'
                  className='form-control'
                  name='fullnameReg'
                  placeholder='نام و نام خانوادگی'
                  aria-describedby='username'
                  value={fullname}
                  onChange={fullNameInput}
                />
                {validator.current.message(
                  "fullnameReg",
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
                  className='form-control'
                  name='emailReg'
                  placeholder='ایمیل'
                  aria-describedby='Email-address'
                  value={email}
                  onChange={emailInput}
                />
                {validator.current.message("emailReg", email, "required|email")}
              </div>

              <div className='input-group'>
                <span className='input-group-addon' id='Password'>
                  <i className='zmdi zmdi-lock'></i>
                </span>
                <input
                  type='password'
                  className='form-control'
                  name='passwordReg'
                  placeholder='رمز عبور '
                  aria-describedby='Password'
                  value={password}
                  onChange={passwordInput}
                />
                {validator.current.message(
                  "passwordReg",
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
                {validator.current.message(
                  "policyReg",
                  policy,
                  "required"
                )}
              </div>

              <div className='link'>
                <a href='google.com'>
                  {" "}
                  <i className='zmdi zmdi-assignment'></i> قوانین و مقررات سایت
                  !
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
    </Fragment>
  );
};

export default Register;
