import React from "react";
import "./OnTheWeb.scss";

import Headings from "../../Components/Headings/Headings";

import github from "../../ExternalAssets/github.svg";
import dribble from "../../ExternalAssets/dribble.svg";
import linkedin from "../../ExternalAssets/linkedin.svg";
import codepen from "../../ExternalAssets/codepen.svg";
import pinterest from "../../ExternalAssets/pinterest.svg";
import instagram from "../../ExternalAssets/instagram.svg";
import behance from "../../ExternalAssets/behance.svg";
import twitter from "../../ExternalAssets/twitter.svg";

const OnTheWeb = () => {
  return (
    <div className="web-whole-container">
      <div className="web-container">
        <div className="web-headings">
          <Headings heading1="MORE OF MY WORKS" heading2="On The Web" />
        </div>

        <div className="web-links-container">
          <img src={github} alt="" />
          <img src={dribble} alt="" />
          <img src={linkedin} alt="" />
          <img src={codepen} alt="" />
          <img src={pinterest} alt="" />
          <img src={instagram} alt="" />
          <img src={behance} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OnTheWeb;
