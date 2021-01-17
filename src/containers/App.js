import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopLearn from "./TopLearn";

const App = () => {
     useEffect(() => {
          require("./../utils/script");
     }, []);
     
     return (
          <Router>
               <TopLearn />
          </Router>
     );
};

export default App;
