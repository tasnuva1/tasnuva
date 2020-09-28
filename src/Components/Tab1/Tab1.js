import React from "react";
import "./Tab.scss";

const Tab1 = ({ children }) => {
  return (
    <div className="tab1">
      <h3>{children}</h3>
    </div>
  );
};

export default Tab1;
