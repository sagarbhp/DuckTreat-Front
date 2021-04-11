import React from "react";

function Checkbox({ state, setState, label }) {
  const changeHandler = (e) => {
    setState(e.target.checked);
  };
  return (
    <div className="checkbox-container">
      <input type={"checkbox"} onClick={changeHandler} className="textInput" />
      <p className="textInput-label">{label}</p>
      <style jsx>{`
        .checkbox-container {
          display: flex;
          align-items: center;
          margin-top: 15px;
        }
        .textInput {
          font-size: 1.1rem;

          min-width: 0;
          background-color: white;
          outline-color: #8fd6e1;
        }
        .textInput-label {
          font-weight: 600;
          color: grey;
          margin: 0;
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
}

export default Checkbox;
