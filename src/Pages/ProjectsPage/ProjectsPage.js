import React from "react";
import "./ProjectsPage.scss";
import ProjectsTap from "../../Components/ProjectsTap/ProjectsTap";

import pro1 from "../../ExternalAssets/pro1.jpg";
import pro2 from "../../ExternalAssets/pro2.jpg";
import pro3 from "../../ExternalAssets/pro3.jpg";

import production from "../../ExternalAssets/production.mp4";

import Headings from "../../Components/Headings/Headings";
import Tab1 from "../../Components/Tab1/Tab1";
import SingleTap2 from "../../Components/SingleTap2/SingleTap2";
import Tap3Screen from "../../Components/Tap3Screen/Tap3Screen";
import SingleSkill from "../../Components/SingleSkill/SingleSkill";
import DescriptionHeading from "../../Components/DescriptionHeading/DescriptionHeading";
import DescriptionParagrap from "../../Components/DescriptionParagrap/DescriptionParagrap";

const ProjectsPage = () => {
  return (
    <div className="projectpage-container">
      <div className="projectpage-heading">
        <Headings
          heading1="FEATURED PROJECTS —"
          heading2="Stuff I’ve Worked On"
        />
      </div>

      {/* <ProjectsTap /> */}

      <div className="tap-whole-container">
        <div className="tab1-container">
          <Tab1>WEB DEV</Tab1>
          <Tab1>GRAPHICS</Tab1>
          <Tab1>3D RENDER</Tab1>
          <Tab1>OTHER</Tab1>
        </div>
        <div className="tab2-container">
          <div className="tap2">
            <SingleTap2 image={pro1} heading="Web Dev // realhousey" />
            <SingleTap2 image={pro2} heading="Web Dev // realhousey" />
            <SingleTap2 image={pro3} heading="Web Dev // realhousey" />
            <SingleTap2 image={pro3} heading="Web Dev // realhousey" />
            <SingleTap2 image={pro3} heading="Web Dev // realhousey" />
            <SingleTap2 image={pro3} heading="Web Dev // realhousey" />
          </div>
        </div>
        <div className="tap3-container">
          <div className="tap3">
            <div className="tab3-border">
              <Tap3Screen video={production} />
              <div className="skill-container">
                <SingleSkill skill="REACTS" />
                <SingleSkill skill="REDUX" />
                <SingleSkill skill="NODE" />
                <SingleSkill skill="EXPRESS" />
                <SingleSkill skill="FIGMA" />
                <SingleSkill skill="PHOTOSHOP CC" />
              </div>

              <DescriptionHeading heading="Web Dev / Synthesis" />

              <DescriptionParagrap
                paragrap="Synthesis is unique way to watch you favorite live game streamers
              who are playing in the same game instance, at the same time,
              together. This project uses a Node js backend with Express and
              MongoDB providing a RESTful API to the front end is completely in
              React. This is also helps enabled (useing cerbot) and cloudfire.
              This could not be develped properly with mobile in mind due to
              it's nature. All design and development from start to finish was
              done by myself."
              />

              <DescriptionParagrap
                paragrap="Synthesis is unique way to watch you favorite live game streamers
              who are playing in the same game instance, at the same time,
              together. This project uses a Node js backend with Express and
              MongoDB providing a RESTful API to the front end is completely in
              React. This is also helps enabled (useing cerbot) and cloudfire.
              This could not be develped properly with mobile in mind due to
              it's nature. All design and development from start to finish was
              done by myself."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
