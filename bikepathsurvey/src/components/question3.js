import React from "react";
import { useNavigate } from "react-router-dom";


function Question3() {
    const navigate = useNavigate();

    const goToPrevQuestion = () => {
        navigate("/question2");
      };
  return (
    <div className="container">
      <h2>How would you rate this sidewalk</h2>
      <form>
        <label>
          <input type="radio" name="season" value="Spring" /> Excellent
        </label>
        <br />
        <label>
          <input type="radio" name="season" value="Summer" /> Good
        </label>
        <br />
        <label>
          <input type="radio" name="season" value="Fall" /> Fair
        </label>
        <br />
        <label>
          <input type="radio" name="season" value="Winter" /> Bad
        </label>
        <br />
        <button type="button" onClick={goToPrevQuestion}>
          Prev
        </button>
        <button type="button">
          Finish
        </button>
      </form>
    </div>
  );
}

export default Question3;
