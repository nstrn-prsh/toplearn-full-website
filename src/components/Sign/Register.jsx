import React, { Fragment, useState } from "react";

const Register = () => {
  const [getFullName, setFullName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  const resetState = () => {
    setFullName("");
    setEmail("");
    setPassword("");
  };

  const submitButton = (event) => {
    event.preventDefault();
    const user = {
      getFullName,
      getEmail,
      getPassword,
    };
    alert(`${getFullName} در حال ثبت نام...`);
    resetState();
  };
  return (
    <Fragment>
      <main className='client-page'>
        <div className='container-content'>
          <header>
            <h2> عضویت در سایت </h2>
          </header>

          <div className='form-layer'>
            <form  onSubmit={submitButton}>
              <div className='input-group'>
                <span className='input-group-addon' id='username'>
                  <i className='zmdi zmdi-account'></i>
                </span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='نام و نام خانوادگی'
                  aria-describedby='username'
                  value={getFullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className='input-group'>
                <span className='input-group-addon' id='email-address'>
                  <i className='zmdi zmdi-email'></i>
                </span>
                <input
                  type='email'
                  className='form-control'
                  placeholder='ایمیل'
                  aria-describedby='Email-address'
                  value={getEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='input-group'>
                <span className='input-group-addon' id='Password'>
                  <i className='zmdi zmdi-lock'></i>
                </span>
                <input
                  type='password'
                  className='form-control'
                  placeholder='رمز عبور '
                  aria-describedby='Password'
                  value={getPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className='accept-rules'>
                <label>
                  <input type='checkbox' name='' /> قوانین و مقررات سایت را
                  میپذیرم{" "}
                </label>
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

              <button className='btn btn-success'>
                {" "}
                عضویت در سایت{" "}
              </button>
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Register;
