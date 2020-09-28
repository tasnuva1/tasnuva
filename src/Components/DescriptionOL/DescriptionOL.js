import React from "react";
import "./DescriptionOL.scss";

const DescriptionOL = ({ children }) => {
  return (
    <div className="descripton-ol-container">
      <ol>
        <li>{children}</li>
      </ol>
    </div>
  );
};

export default DescriptionOL;
