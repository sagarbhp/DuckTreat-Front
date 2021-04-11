import React, { useState, useEffect } from "react";
import Header from "../header";

//Icon
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Collapse, IconButton } from "@material-ui/core";

function HomeComponent() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className="home-root">
      <Header link="/analytics" />
      <div className="home-container">
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1500 } : {})}
          collapsedHeight={140}
        >
          <h1 className="home-welcome-text" name="home-welcome-text">
            Welcome to <br /> Duck
            <span className="home-color-text">Treats</span>{" "}
          </h1>
          <IconButton>
            <ArrowDownwardIcon fontSize="large" style={{ color: "white" }} />
          </IconButton>
        </Collapse>
      </div>
      <style jsx>
        {`
          .home-root {
            height: 100vh;
            background-image: url(/ducks4.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
          }
          .home-container {
            display: flex;
            height: 100vh;
            padding: 20px;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .home-welcome-text {
            margin: 0;
            font-size: 3.5rem;
            color: white;
          }
          .home-color-text {
            color: #ffcc29;
          }
        `}
      </style>
    </div>
  );
}

export default HomeComponent;
