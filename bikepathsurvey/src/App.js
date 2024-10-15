import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/welcome";
import Question1 from "./components/question1";
import Question2 from "./components/question2";
import Question3 from "./components/question3";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/question1" element={<Question1 />} />
          <Route path="/question2" element={<Question2 />} />
          <Route path="/question3" element={<Question3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
