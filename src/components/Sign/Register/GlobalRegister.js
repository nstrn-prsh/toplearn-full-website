// Global state file for register
// all functions are here
import React, { useState } from "react";
import { toast } from "react-toastify";
import ContextApi from "./../../../containers/ContextApi";
import { registerAxios } from "./../../../services/userService";

/* nokte : *********************************** 
esme getter va setter ha az tarafe server miad 
ps ma nemitonim be delkhah esm bezarim barash */
const GlobalRegister = (props) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetState = () => {
    setFullname("");
    setEmail("");
    setPassword("");
  };

  const submitButton = async (event) => {
    event.preventDefault();
    const user = {
      fullname,
      email,
      password,
    };
    // alert(`${fullname} در حال ثبت نام...`);

    try {
      const { status, data } = await registerAxios(user);
      if (status === 201) {
        toast.success("با موفقیت انجام شد.", {
          position: "top-center",
          closeOnClick: true,
        });
        console.log(data);
        resetState();
      }
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده.", {
        position: "top-center",
        closeOnClick: true,
      });
    }
  };
  const fullNameInput = (event) => {
    setFullname(event.target.value);
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
        FullName: fullname,
        Email: email,
        Password: password,
        resetState: resetState,
        submitButton: submitButton,
        fullNameInput: fullNameInput,
        emailInput: emailInput,
        passwordInput: passwordInput,
      }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};

export default GlobalRegister;
