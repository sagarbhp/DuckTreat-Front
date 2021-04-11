import React from "react";

function ErrorMessage({ error }) {
  return (
    <div className="err-root">
      Error: {error.message}
      <style jsx>
        {`
          .err-root {
            text-align: center;
            padding: 20px 30px;
            font-size: 1.5rem;
            color: red;
          }
        `}
      </style>
    </div>
  );
}

export default ErrorMessage;
