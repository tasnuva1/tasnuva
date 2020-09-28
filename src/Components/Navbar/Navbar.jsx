import React from "react";
import "./Navbar.scss";

import logo from "../../ExternalAssets/tasnuva-logo.svg";
import Btn2 from "../Btn2/Btn2";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={logo} alt="Logo" />
      <div className="nav-links">
        <div className="nav-link">Home</div>
        <div className="nav-link">Portfolio</div>
        <div className="nav-link">About</div>
        <div className="nav-link">Contect</div>
        <div className="nav-link">
          <Btn2 />{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
