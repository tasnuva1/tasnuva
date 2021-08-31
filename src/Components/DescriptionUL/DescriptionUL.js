import React from "react";
import "./DescriptionUL.scss";

const DescriptionUL = ({ children }) => {
  return (
    <div className="descripton-ul-container">
      <ul>
        <li>{children}</li>
      </ul>
    </div>
  );
};

export default DescriptionUL;
