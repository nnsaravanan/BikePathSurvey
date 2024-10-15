import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Question2() {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  // List of options for multiple select
  const options = [
    "Fire hydrant",
    "Pole",
    "Tree",
    "Vegetation",
    "Trash/recycling bin",
    "Parked car",
    "Parked bike",
    "Construction",
    "Sign",
    "Stairs",
    "Height difference",
    "Narrow",
    "Litter/garbage",
    "Parked scooter/motorcycle",
  ];

  // Handle checkbox changes
  const handleOptionChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add selected option to the array
      setSelectedOptions([...selectedOptions, value]);
    } else {
      // Remove unselected option from the array
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  // Handle the next button click
  const goToPrevQuestion = () => {
    console.log("Selected options:", selectedOptions);
    navigate("/question1"); // Navigate to the next question
  };

  const goToNextQuestion = () => {
    console.log("Selected options:", selectedOptions);
    navigate("/question3"); // Navigate to the next question
  };

  return (
    <div className="container">
      <h2>Are there any obstacles in this path?</h2>
      <form className="checkbox-list">
        {/* Dynamically generate checkboxes from the options list */}
        {options.map((option) => (
          <div key={option}>
            <label>
              <input
                type="checkbox"
                name="obstacles"
                value={option}
                onChange={handleOptionChange}
              />{" "}
              {option}
            </label>
          </div>
        ))}
        <br />
        <button type="button" onClick={goToPrevQuestion}>
          Prev
        </button>
        <button type="button" onClick={goToNextQuestion}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Question2;
