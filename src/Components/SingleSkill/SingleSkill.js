import React from "react";
import "./SingleSkill.scss";
import sercal from "../../ExternalAssets/o.svg";

const SingleSkill = ({ skill }) => {
  return (
    <div className="single-skill">
      <img src={sercal} alt="" className="skill-sercal" />
      <h4>{skill}</h4>
    </div>
  );
};

export default SingleSkill;
