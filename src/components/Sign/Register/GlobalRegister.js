import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ContextRegister from "./ContextRegister";

const GlobalRegister = (props) => {
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
    // alert(`${getFullName} در حال ثبت نام...`);
    axios
      .post(
        "https://toplearnapi.ghorbany.dev/api/register",
        JSON.stringify(user),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(({ data, status }) => {
        console.log(data);
        if (status === 201) {
          // 200 : ok 
          // 201 : created
          // 202 : accepted
          // 218 : this is fine
          toast.success("با موفقیت انجام شد.", {
            position: "top-center",
            closeOnClick: true,
          });
          resetState();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("مشکلی پیش آمده.", {
          position: "top-center",
          closeOnClick: true,
        });
      });
  };

  // let re = /\S/g;
  //   if (re.exec(getTodo) !== null) {
  //     todos.push(todo);
  //     setTodos(todos);
  //     setTodo("");
  //   }

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
