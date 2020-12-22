import React, { Fragment, useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { loginAxios } from "./../../services/userService";
// import { Sugar } from "react-preloaders";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این قسمت الزامی است.",
        min: "حداقل باید 5 کاراکتر باشد!",
        email: "ایمیل وارد شده صحیح نمیباشد",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );

  const resetIn = () => {
    setEmail("");
    setPassword("");
  };

  const submitBtn = async (event) => {
    event.preventDefault();
    const user = { email, password };

    try {
      if (validator.current.allValid()) {
        // setLoading(true);
        const { status, data } = await loginAxios(user);
        if (status === 200) {
          toast.success("با موفقیت انجام شد.", {
            position: "top-center",
            closeOnClick: true,
          });
          localStorage.setItem("token", data.token);
          // setLoading(false);
          // redirect user to page after login
          history.replace("/");
          resetIn();
          console.log(data);
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {
      console.log(error);
      // setLoading(false);
      toast.error("مشکلی پیش آمده.", {
        position: "top-center",
        closeOnClick: true,
      });
    }
  };

  const emailIn = (event) => {
    setEmail(event.target.value);
    validator.current.showMessageFor("emailLog");
  };
  const passwordIn = (event) => {
    setPassword(event.target.value);
    validator.current.showMessageFor("passwordLog");
  };

  return (
    <Fragment>
      <main className='client-page'>
        <div className='container-content'>
          <Helmet>
            <meta charSet='utf-8' />
            <title>تاپلرن|ورود به صفحه شخصی</title>
          </Helmet>

          <header>
            <h2> ورود به سایت </h2>
          </header>

          {/* <Sugar customLoading={loading} time={0} color='#097938' /> */}

          <div className='form-layer'>
            <form onSubmit={submitBtn}>
              <div className='input-group'>
                <span className='input-group-addon' id='email-address'>
                  <i className='zmdi zmdi-email'></i>
                </span>
                <input
                  type='email'
                  name='emailLog'
                  className='form-control'
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

export default withRouter(Login);
