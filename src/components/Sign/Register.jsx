import React, { useState, useRef, Fragment } from "react";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { Helmet } from "react-helmet";
import { registerAxios } from "./../../services/userService";
// import { Sugar } from "react-preloaders";

const Register = ({ history }) => {
  /* nokte : *********************************** 
esme getter va setter ha az tarafe server miad 
ps ma nemitonim be delkhah esm bezarim barash */
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [policy, setPolicy] = useState();
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

  const resetState = () => {
    setFullname("");
    setEmail("");
    setPassword("");
  };

  const submitButton = async (event) => {
    event.preventDefault();
    const user = { fullname, email, password };

    try {
      if (validator.current.allValid()) {
        // setLoading(true);
        const { status } = await registerAxios(user);
        if (status === 201) {
          toast.success("با موفقیت انجام شد.", {
            position: "top-center",
            closeOnClick: true,
          });
          // setLoading(false);
          history.push("/login");
          resetState();
        } else {
          validator.current.showMessages();
          forceUpdate(1);
        }
      }
    } catch (error) {
      // setLoading(false);
      toast.error("مشکلی پیش آمده.", {
        position: "top-center",
        closeOnClick: true,
      });
      console.log(error);
    }
  };

  const fullNameInput = (event) => {
    setFullname(event.target.value);
    validator.current.showMessageFor("fullnameReg");
  };
  const emailInput = (event) => {
    setEmail(event.target.value);
    validator.current.showMessageFor("emailReg");
  };
  const passwordInput = (event) => {
    setPassword(event.target.value);
    validator.current.showMessageFor("passwordReg");
  };
  const policyCheck = (event) => {
    setPolicy(event.currentTarget.checked);
    validator.current.showMessageFor("policyReg");
  };

  return (
    <Fragment>
      <main className='client-page'>
        <div className='container-content'>
          <Helmet>
            <meta charSet='utf-8' />
            <title>تاپلرن|عضویت در سایت</title>
          </Helmet>

          <header>
            <h2> عضویت در سایت </h2>
          </header>

          {/* {loading ? (
            <Sugar customLoading={loading} time={0} color='#097938' />
          ) : null} */}

          <div className='form-layer'>
            <form onSubmit={submitButton}>
              <div className='input-group'>
                <span className='input-group-addon' id='username'>
                  <i className='zmdi zmdi-account'></i>
                </span>
                <input
                  type='text'
                  name='fullnameReg'
                  className='form-control'
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
                  name='emailReg'
                  className='form-control'
                  placeholder='ایمیل'
                  aria-describedby='email-address'
                  value={email}
                  onChange={emailInput}
                />
                {validator.current.message("emailReg", email, "required|email")}
              </div>

              <div className='input-group'>
                <span className='input-group-addon' id='password'>
                  <i className='zmdi zmdi-lock'></i>
                </span>
                <input
                  type='password'
                  name='passwordReg'
                  className='form-control'
                  placeholder='رمز عبور '
                  aria-describedby='password'
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
                {validator.current.message("policyReg", policy, "required")}
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
