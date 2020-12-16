import React, { useState } from "react";
import ContextRegister from "./ContextRegister";

const GlobalRegister = (props) => {
  const [getFullName, setFullName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  // let re = /\S/g;
  //   if (re.exec(getTodo) !== null) {
  //     todos.push(todo);
  //     setTodos(todos);
  //     setTodo("");
  //   }

  const resetState = () => {
    setFullName("");
    setEmail("");
    setPassword("");
  };

  const submitButton = (event) => {
    event.preventDefault();
    // const user = {
    //   getFullName,
    //   getEmail,
    //   getPassword,
    // };
    alert(`${getFullName} در حال ثبت نام...`);
    resetState();
  };

  const fullNameInput = (event) => {
    setFullName(event.target.value);
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
        FullName: getFullName,
        Email: getEmail,
        Password: getPassword,
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
