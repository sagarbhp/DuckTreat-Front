import React, { useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import Form from "../form";

//Icon
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Collapse, IconButton } from "@material-ui/core";

function HomeComponent() {
  const [checked, setChecked] = useState(false);

  //onrender starts animation
  useEffect(() => {
    setChecked(true);
  }, []);

  // if user clicks the down arrow handleScroll fires and scrolls
  // the user to the form
  const handleScroll = () => {
    let form = document.getElementById("form");
    form.scrollIntoView({
      behavior: "smooth",
    });
  };
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
          <IconButton onClick={handleScroll}>
            <ArrowDownwardIcon fontSize="large" style={{ color: "white" }} />
          </IconButton>
        </Collapse>
      </div>
      <Form />
      <Footer />
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
