import { createContext } from "react";

export const contextAPI = createContext({
  fullname: "",
  email: "",
  password: "",
  policy: "",
  validator: null,
  reset: () => {},
  fullNameInput: () => {}, //fullnameIn
  emailInput: () => {}, //emailIn
  passwordInput: () => {}, //passwordIn
  policyCheck: () => {}, // policyReg
  handleLogin: () => {},
  handleRegister: () => {},
});
