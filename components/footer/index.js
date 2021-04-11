import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { IconButton } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer-container">
      <h1 className="footer-heading">Thank You For Your Participation</h1>
      <p className="footer-text">
        For Exciting Research Updates, Follow Me On Social Media.
      </p>
      <div>
        <IconButton>
          <FacebookIcon fontSize={"large"} />
        </IconButton>
        <IconButton>
          <InstagramIcon fontSize={"large"} />
        </IconButton>
        <IconButton>
          <TwitterIcon fontSize={"large"} />
        </IconButton>
      </div>
      <style jsx>
        {`
          .footer-container {
            padding: 20px;
            padding-bottom: 50px;
            background-color: #9fb8ad;
            text-align: center;
            position: relative;
            bottom: 0;
            width: 100%;
          }
          .footer-heading {
            color: #fff;
            margin-bottom: 5px;
          }
          .footer-text {
            color: #555;
            margin: 0;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}

export default Footer;
