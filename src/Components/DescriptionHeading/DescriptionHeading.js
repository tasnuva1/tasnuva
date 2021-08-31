import React from "react";
import "./DescriptionHeading.scss";

const DescriptionHeading = ({ heading }) => {
  return (
    <div className="description-heading-container">
      <h2>{heading}</h2>
    </div>
  );
};

export default DescriptionHeading;
