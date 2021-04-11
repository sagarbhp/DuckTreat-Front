import React from "react";

function TextInput({ state, setState, label, type, required }) {
  const changeHandler = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="textInput-container">
      <p className="textInput-label">{label}</p>
      <input
        type={type || "text"}
        value={state || ""}
        onChange={changeHandler}
        className="textInput"
        required={required || false}
      />
      <style jsx>{`
        .textInput-container {
          flex: 1;
        }
        .textInput {
          font-size: 1.1rem;
          padding: 8px;
          min-width: 0;
          width: 100%;
          flex: 1;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline-color: #8fd6e1;
        }
        .textInput-label {
          margin-bottom: 2px;
          font-weight: 600;
          color: #666;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}

export default TextInput;
