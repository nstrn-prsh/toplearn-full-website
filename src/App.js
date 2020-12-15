import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopLearn from "./containers/TopLearn";

const App = () => {
  return (
    <BrowserRouter>
      <TopLearn />
    </BrowserRouter>
  );
};

export default App;
