import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const startSurvey = () => {
    navigate("/question1");
  };

  return (
    <div className="container">
      <h1>Welcome to the Survey</h1>
      <button onClick={startSurvey}>Start Survey</button>
    </div>
  );
}

export default Welcome;
