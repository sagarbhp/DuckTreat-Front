import React from "react";

import Header from "../header";
import Footer from "../footer";
import PopularFoodTable from "./pupularFoodTable";

function AnalyticsComponent() {
  return (
    <div className="analytics-root">
      <div className="analytics-container">
        <Header
          link="/"
          style={{ backgroundColor: "#1597bb", position: "sticky" }}
        />
        <PopularFoodTable />
      </div>
      <Footer />
      <style jsx>
        {`
          .analytics-root {
            height: 100vh;
          }
          .analytics-container {
            min-height: 100%;
          }
        `}
      </style>
    </div>
  );
}

export default AnalyticsComponent;
