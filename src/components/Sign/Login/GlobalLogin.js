// Global state file for register
// all functions are here
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import ContextApi from "./../../../containers/ContextApi";
import { loginAxios } from "./../../../services/userService";

const GlobalLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    const user = {
      email,
      password,
    };

    try {
      if (validator.current.allValid()) {
        const { status, data } = await loginAxios(user);
        if (status === 200) {
          toast.success("با موفقیت انجام شد.", {
            position: "top-center",
            closeOnClick: true,
          });
          console.log(data);
          localStorage.setItem("token", data.token);
          // redirect user to page after login
          props.history.replace("/");
          resetIn();
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {
      console.log(error);
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
    <ContextApi.Provider
      value={{
        email,
        password,
        validator,
        resetIn,
        submitBtn,
        emailIn,
        passwordIn,
      }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};

export default GlobalLogin;
