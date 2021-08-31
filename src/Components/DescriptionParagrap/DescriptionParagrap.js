import React from "react";
import "./DescriptionParagrap.scss";

const DescriptionParagrap = ({ paragrap }) => {
  return (
    <div className="description-paragrap-container">
      <p>{paragrap}</p>
    </div>
  );
};

export default DescriptionParagrap;
