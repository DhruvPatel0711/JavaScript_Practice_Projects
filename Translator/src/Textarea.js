import React from "react";

const Textarea = ({ inputText, setInputText }) => {

    const handleInput = (e) => {
        setInputText(e.target.value);
    }
  return (
    <textarea
      style={{
        width: "100%",
        height: "100px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
        resize: "none",
        marginBottom: "1rem",
      }}
      placeholder="Enter your text here..."
      onInput={handleInput}
      value={inputText}
    ></textarea>
  );
};

export default Textarea;