// Global state file for register
// all functions are here
import React, { useState } from "react";
import { toast } from "react-toastify";
import ContextRegister from "./ContextRegister";
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
    /*
    200 : ok
    201 : created
    202 : accepted
    218 : this is fine
    */
    const { status } = await registerAxios(user);
    try {
      if (status === 201) {
        toast.success("با موفقیت انجام شد.", {
          position: "top-center",
          closeOnClick: true,
        });
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
    <ContextRegister.Provider
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
    </ContextRegister.Provider>
  );
};

export default GlobalRegister;
