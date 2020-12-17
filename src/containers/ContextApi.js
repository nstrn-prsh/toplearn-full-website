import { createContext } from "react";

const ContextApi = createContext({
  // register
  FullName: "",
  Email: "",
  Password: "",
  resetState: () => {},
  submitButton: () => {},
  fullNameInput: () => {},
  emailInput: () => {},
  passwordInput: () => {},
  // login
  submitBtn: () => {},
  resetInput: () => {},
});

export default ContextApi;
