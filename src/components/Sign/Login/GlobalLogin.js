// Global state file for register
// all functions are here
import React, { useState } from "react";
import { toast } from "react-toastify";
import ContextApi from "./../../../containers/ContextApi";
import { loginAxios } from "./../../../services/userService";

const GlobalLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetInput = () => {
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
        resetInput();
      }
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده.", {
        position: "top-center",
        closeOnClick: true,
      });
    }
  };

  const emailInput = (event) => {
    setEmail(event.target.value);
  };
  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  return (
    <ContextApi.Provider
      value={{
        Email: email,
        Password: password,
        resetInput: resetInput,
        submitBtn: submitBtn,
        emailInput: emailInput,
        passwordInput: passwordInput,
      }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};

export default GlobalLogin;
