// Global state file for register
// all functions are here
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import ContextApi from "./../../../containers/ContextApi";
import { registerAxios } from "./../../../services/userService";

/* nokte : *********************************** 
esme getter va setter ha az tarafe server miad 
ps ma nemitonim be delkhah esm bezarim barash */
const GlobalRegister = (props) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [policy, setPolicy] = useState();
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
    const user = {
      fullname,
      email,
      password,
    };
    // alert(`${fullname} در حال ثبت نام...`);

    try {
      if (validator.current.allValid()) {
        const { status, data } = await registerAxios(user);
        if (status === 201) {
          toast.success("با موفقیت انجام شد.", {
            position: "top-center",
            closeOnClick: true,
          });
          console.log(data);
          resetState();
        } else {
          validator.current.showMessages();
          forceUpdate(1);
        }
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
    <ContextApi.Provider
      value={{
        fullname,
        email,
        password,
        policy,
        validator,
        resetState,
        submitButton,
        fullNameInput,
        emailInput,
        passwordInput,
        policyCheck,
      }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};

export default GlobalRegister;
