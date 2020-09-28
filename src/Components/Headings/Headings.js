import React from "react";
import "./Headings.scss";

const Headings = ({ heading1, heading2, heading3FontSize }) => {
  return (
    <div className="headings-container">
      {heading1 && <h2>{heading1}</h2>}
      {heading2 && (
        <h3 style={{ fontSize: `${heading3FontSize}` }}>{heading2}</h3>
      )}
    </div>
  );
};

export default Headings;
