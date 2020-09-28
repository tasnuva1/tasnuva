import React from "react";
import "./SingleTap2.scss";

import DEMO from "../../ExternalAssets/DEMO.svg";
import codelink from "../../ExternalAssets/web-code-link.svg";
import tap2back from "../../ExternalAssets/tap2-hover-back.svg";

const SingleTap2 = ({ image, heading }) => {
  return (
    <div className="img1" style={{ backgroundImage: `url(${image})` }}>
      <div className="web-links-container">
        <div className="web-links">
          <img src={DEMO} alt="demo-website" />
          <img src={codelink} alt="code-link" />
        </div>
      </div>
      <div
        className="tap2-back"
        style={{ backgroundImage: `url(${tap2back})` }}
      >
        <p>{heading}</p>
      </div>
    </div>
  );
};

export default SingleTap2;
