import React, { useState } from "react";

// Usestate -> Hooks => For handling states in functional based components

export default function Textform() {
  // Convert to uppercase
  const handleUpClick = () => {
    setUpper(text.toUpperCase());
  };

  // Convert to lowercase
  const handleLowClick = () => {
    setUpper(text.toLowerCase());
  };

  // Without this you can't write in text area
  const handleOnChange = (event) => {
    setUpper(event.target.value);
  };

  // Using hook
  const [text, setUpper] = useState("");

  return (
    <>
      <div>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter your text here..."
            onChange={handleOnChange}
            id="myText"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1"
          id="toUpper"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary mx-1"
          id="toUpper"
          onClick={handleLowClick}
        >
          Convert to lowercase
        </button>
      </div>

      <div className="container my-2">
        <h1>Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          Reading time : <span>{text.split(" ").length * 0.008}</span>
        </p>
      </div>
    </>
  );
}
