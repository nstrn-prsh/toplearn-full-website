import React, { useState, useRef, useEffect } from "react";
import ReactValidator from "simple-react-validator";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { loginAxios, registerAxios } from "./../services/userService";
import { toastSuccess, toastError } from "./../utils/toastMsg";
import { addUser } from "./../redux/action/user";
import { decodeToken } from "./../utils/decodeToken";
import { contextAPI } from "./contextAPI";

const GlobalContext = ({ history, children }) => {
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [policy, setPolicy] = useState();
  const [, forceUpdate] = useState();

  useEffect(() => {
    return () => {
      setFullname();
      setEmail();
      setPassword();
      setPolicy();
      forceUpdate();
    };
  }, []);

  // simple-react-validator
  const validator = useRef(
    new ReactValidator({
      messages: {
        required: "پر کردن این قسمت الزامی است.",
        min: "حداقل باید 5 کاراکتر باشد!",
        email: "ایمیل وارد شده صحیح نمیباشد",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );

  // Login
  const handleLogin = async (event) => {
    event.preventDefault();
    const user = { email, password };

    try {
      if (validator.current.allValid()) {
        dispatch(showLoading("serverBar"));
        const { status, data } = await loginAxios(user);
        if (status === 200) {
          toastSuccess("با موفقیت انجام شد.");
          dispatch(hideLoading("serverBar"));
          localStorage.setItem("token", data.token);
          dispatch(addUser(decodeToken(data.token).payload.user)); //e18.6
          // redirect user to page after login
          history.replace("/");
          console.log(data);
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {
      console.log(error);
      toastError("مشکلی پیش آمده.");
      dispatch(hideLoading("serverBar"));
    }
  };

  //   register
  const handleRegister = async (event) => {
    event.preventDefault();
    const user = { fullname, email, password };

    try {
      if (validator.current.allValid()) {
        dispatch(showLoading("serverBar"));
        const { status } = await registerAxios(user);
        if (status === 201) {
          toastSuccess("با موفقیت انجام شد.");
          dispatch(hideLoading("serverBar"));
          history.push("/login");
        } else {
          validator.current.showMessages();
          forceUpdate(1);
        }
      }
    } catch (error) {
      toastError("مشکلی پیش آمده.");
      console.log(error);
      dispatch(hideLoading("serverBar"));
    }
  };

  const fullNameInput = (event) => {
    setFullname(event.target.value);
    validator.current.showMessageFor("fullnameIn");
  };
  const emailInput = (event) => {
    setEmail(event.target.value);
    validator.current.showMessageFor("emailIn");
  };
  const passwordInput = (event) => {
    setPassword(event.target.value);
    validator.current.showMessageFor("passwordIn");
  };
  const policyCheck = (event) => {
    setPolicy(event.currentTarget.checked);
    validator.current.showMessageFor("policyReg");
  };

  return (
    <contextAPI.Provider
      value={{
        fullname,
        email,
        password,
        policy,
        validator,
        fullNameInput,
        emailInput,
        passwordInput,
        policyCheck,
        handleLogin,
        handleRegister,
      }}
    >
      {children}
    </contextAPI.Provider>
  );
};

export default withRouter(GlobalContext);
