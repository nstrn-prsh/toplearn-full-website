// context api for register
import { createContext } from "react";

const ContextRegister = createContext({
  FullName: "",
  Email: "",
  Password: "",
  resetState: () => {},
  submitButton: () => {},
  fullNameInput: () => {},
  emailInput: () => {},
  passwordInput: () => {},
});

export default ContextRegister;
