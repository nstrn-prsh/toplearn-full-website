import { createContext } from "react";

const ContextApi = createContext({
  // sign
  fullname: "",
  email: "",
  password: "",
  validator: () => {},
  // register
  policy: undefined, // ?
  resetState: () => {},
  submitButton: () => {},
  fullNameInput: () => {},
  emailInput: () => {},
  passwordInput: () => {},
  policyCheck: () => {},
  // login
  resetIn: () => {},
  submitBtn: () => {},
  emailIn: () => {},
  passwordIn: () => {},
});

export default ContextApi;
