import React from "react";
import { useRouter } from "next/router";
import { IconButton } from "@material-ui/core";

//Icons
import SortIcon from "@material-ui/icons/Sort";

function Header({ style, link }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(link);
  };
  return (
    <div className="header-root" style={{ ...style }}>
      <div className="header-container">
        <h1 className="header-title">
          Duck<span className="header-color-text">Treats</span>
        </h1>
        <IconButton onClick={handleClick}>
          <SortIcon fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </div>
      <style jsx>
        {`
          .header-root {
            padding: 30px 20px;
            position: fixed;
            top: 0;
            width: 100%;
          }
          .header-container {
            display: flex;
            padding: 0 7%;
          }
          .header-title {
            font-size: 1, 7rem;
            margin: 0;
            flex-grow: 1;
            color: white;
          }
          .header-color-text {
            color: #ffcc29;
          }
        `}
      </style>
    </div>
  );
}

export default Header;
