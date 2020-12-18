import { createContext } from "react";

const ContextApi = createContext({
  // sign
  fullname: "",
  email: "",
  password: "",
  loading: false, // ?
  validator: () => {},
  // register
  policy: undefined, // ?
  submitButton: () => {},
  fullNameInput: () => {},
  emailInput: () => {},
  passwordInput: () => {},
  policyCheck: () => {},
  // login
  submitBtn: () => {},
  emailIn: () => {},
  passwordIn: () => {},
});

export default ContextApi;
