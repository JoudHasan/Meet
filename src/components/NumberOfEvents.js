import React from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    console.log("Number is:", value);
    if (isNaN(value) || value <= 0) {
      setErrorAlert("Minimum 1 is required");
    } else {
      setCurrentNOE(value);
      setErrorAlert("");
    }
  };

  return (
    <div id="number-of-events">
      <input
        data-testid="numberOfEventsInput"
        type="text"
        className="textboxNumber"
        defaultValue="32"
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
