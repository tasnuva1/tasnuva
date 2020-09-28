import React from "react";
import "./MainContent.scss";
import Navbar from "../Navbar/Navbar";

import codingScreen from "../../ExternalAssets/coding-screen.svg";
import downoadIcon from "../../ExternalAssets/download-from-server.svg";
import Button from "../Button/Button";

const MainContent = () => {
  return (
    <div className="main-container">
      <Navbar />
      <img src={codingScreen} alt="coding" className="coding-screen" />
      <div className="main-contant">
        <div className="main-contant1">
          <span> HI THERE👋, I’M</span>
          <h1>Tasnuva.</h1>
          <h2 className="title2">DESIGNER + DEVELOPER</h2>
          <p>
            I’m a design and a front-end developer based in Dhaka,
            Bangladesh(remote).
          </p>
          <div className="button-resume">
            <Button image={downoadIcon} btn2={false}>
              resume
            </Button>
          </div>
        </div>
        <div className="main-contant2">
          <div className="contant2-p">
            <p>Some Things I've Built.</p>
            <p>You Wanna See?</p>
          </div>
          <div className="button-work">
            <Button btn2={true}>work</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
