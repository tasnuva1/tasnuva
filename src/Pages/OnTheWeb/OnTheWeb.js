import React from "react";
import "./OnTheWeb.scss";

import Headings from "../../Components/Headings/Headings";
import WebLink from "../../Components/WebLink/WebLink.jsx";

import github from "../../ExternalAssets/Web-Logos/github.svg";
import dribbble from "../../ExternalAssets/Web-Logos/dribbble.svg";
import linkedin from "../../ExternalAssets/Web-Logos/linkedin.svg";
import codepen from "../../ExternalAssets/Web-Logos/codepen.svg";
import pinterest from "../../ExternalAssets/Web-Logos/pinterest.svg";
import instagram from "../../ExternalAssets/Web-Logos/instagram.svg";
import behance from "../../ExternalAssets/Web-Logos/behance.svg";
import CustomTabs from "../../Components/CustomTabs/CustomTabs";
// import twitter from '../../ExternalAssets/Web-Logos/twitter.svg';

const OnTheWeb = () => {
  return (
    <>
      {/* <CustomTabs /> */}
      {/* // ------------------------ */}
      <div className="web-whole-container" id="about">
        <div className="web-container">
          <div className="web-headings">
            <Headings heading1="MORE OF MY WORKS" heading2="On The Web" />
          </div>
          <div className="web-links-container">
            <WebLink
              img={github}
              lable="github"
              url="https://github.com/tasnuva1"
            />
            <WebLink
              img={dribbble}
              lable="dribbble"
              url="https://dribbble.com/tasnuva1"
            />
            <WebLink
              img={linkedin}
              lable="linkedin"
              url="https://www.linkedin.com/in/tasnuvaa/"
            />
            <WebLink
              img={codepen}
              lable="codepen"
              url="https://codepen.io/tasnuvaa"
            />
            <WebLink
              img={pinterest}
              lable="pinterest"
              url="https://www.pinterest.com/tasnuva1/"
            />
            <WebLink
              img={instagram}
              lable="instagram"
              url="https://www.instagram.com/codingroad/"
            />
            <WebLink
              img={behance}
              lable="behance"
              url="https://www.behance.net/tasnuva"
            />
            {/* <WebLink img={twitter} lable='twitter' /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OnTheWeb;
