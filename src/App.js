import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopLearn from "./containers/TopLearn";

const App = () => {
  return (
    <Router>
      <TopLearn />
    </Router>
  );
};

export default App;
