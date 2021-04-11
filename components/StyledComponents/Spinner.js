import React from "react";
import { CircularProgress } from "@material-ui/core";

function Spinner() {
  return (
    <div className="circular-spinner">
      <CircularProgress />
      <style jsx>
        {`
          .circular-spinner {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 30px;
          }
        `}
      </style>
    </div>
  );
}

export default Spinner;
