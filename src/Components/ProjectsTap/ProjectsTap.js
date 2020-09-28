import React from "react";
// import "react-tabs/style/react-tabs.scss";
import "../../Pages/ProjectsPage/ProjectsPage.scss";
import "../../react-tabs.scss";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Tab1 from "../Tab1/Tab1";
import SingleTap2 from "../SingleTap2/SingleTap2";
import Tap3Screen from "../Tap3Screen/Tap3Screen";
import SingleSkill from "../SingleSkill/SingleSkill";
import DescriptionHeading from "../DescriptionHeading/DescriptionHeading";
import DescriptionParagrap from "../DescriptionParagrap/DescriptionParagrap";

import pro1 from "../../ExternalAssets/pro1.jpg";
import pro2 from "../../ExternalAssets/pro2.jpg";
import pro3 from "../../ExternalAssets/pro3.jpg";
import production from "../../ExternalAssets/production.mp4";

const customTab = ({ children }) => (
  <Tab>
    <h1>{children}</h1>
  </Tab>
);

customTab.tabsRole = "Tab"; // Required field to use your custom

///////////////////////////////

const complexTap = (
  <div className="projectpage-container">
    <Tabs forceRenderTabPanel defaultIndex={1}>
      <div className="tap-whole-container">
        {/* <div className="tab1-container"> */}
        <TabList>
          <Tab>
            <Tab1>WEB DEV</Tab1>
          </Tab>
          <Tab>
            <Tab1>GRAPHICS</Tab1>
          </Tab>
          <Tab>
            <Tab1>3D RENDER</Tab1>
          </Tab>
          <Tab>
            <Tab1>OTHER</Tab1>
          </Tab>
        </TabList>
        {/* </div> */}
        {/* ////////////// WEB DEV ////////////// */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <div className="tap2">
                <Tab>
                  <SingleTap2 image={pro1} heading="Web Dev // realhousey" />
                </Tab>
                <Tab>
                  <SingleTap2 image={pro2} heading="Web Dev // realhousey" />
                </Tab>
                <Tab>
                  <SingleTap2 image={pro3} heading="Web Dev // realhousey" />
                </Tab>
                <Tab>
                  <SingleTap2 image={pro3} heading="Web Dev // realhousey" />
                </Tab>
                <Tab>
                  <SingleTap2 image={pro3} heading="Web Dev // realhousey" />
                </Tab>
              </div>
            </TabList>
            <TabPanel>
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
            </TabPanel>
            <TabPanel>
              <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
                alt="Marge Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Oldest child and only son of Homer and Marge; brother of Lisa
                and Maggie.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                alt="Bart Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Middle child and eldest daughter of Homer and Marge; sister of
                Bart and Maggie.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png"
                alt="Lisa Simpson"
              />
            </TabPanel>
          </Tabs>
        </TabPanel>
        {/* ////////////// GRAPHICS ////////////// */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            {/* <Tabs> */}
            <TabList>
              <Tab>Philip J. Fry</Tab>
              <Tab>Turanga Leela</Tab>
              <Tab>Bender Bending Rodriguez</Tab>
              <Tab>Amy Wong</Tab>
              <Tab>Professor Hubert J. Farnsworth</Tab>
              <Tab>Doctor John Zoidberg</Tab>
            </TabList>
            <TabPanel>
              <p>
                Protagonist, from the 20th Century. Delivery boy. Many times
                great-uncle to Professor Hubert Farnsworth. Suitor of Leela.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png"
                alt="Philip J. Fry"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Mutant cyclops. Captain of the Planet Express Ship. Love
                interest of Fry.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png"
                alt="Turanga Leela"
              />
            </TabPanel>
            <TabPanel>
              <p>
                A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who
                is Fry's best friend. Built in Tijuana, Mexico, he is the Planet
                Express Ship's cook.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"
                alt="Bender Bending Rodriguez"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Chinese-Martian intern at Planet Express. Fonfon Ru of Kif
                Kroker.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/FuturamaAmyWong.png/140px-FuturamaAmyWong.png"
                alt="Amy Wong"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Many times great-nephew of Fry. CEO and owner of Planet Express
                delivery company. Tenured professor of Mars University.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png"
                alt="Professor Hubert J. Farnsworth"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Alien from Decapod 10. Planet Express' staff doctor and steward.
                Has a medical degree and Ph.D in art history.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png"
                alt="Doctor John Zoidberg"
              />
            </TabPanel>
          </Tabs>
        </TabPanel>

        {/* ////////////// 3D RENDER ////////////// */}

        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>3D RENDER tap1</Tab>
              <Tab>3D RENDER tap2</Tab>
              <Tab>3D RENDER tap3</Tab>
              <Tab>3D RENDER tap4</Tab>
              <Tab>3D RENDER tap5</Tab>
            </TabList>

            <TabPanel>
              <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png"
                alt="Homer Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
                alt="Marge Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Oldest child and only son of Homer and Marge; brother of Lisa
                and Maggie.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                alt="Bart Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Middle child and eldest daughter of Homer and Marge; sister of
                Bart and Maggie.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png"
                alt="Lisa Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Youngest child and daughter of Homer and Marge; sister of Bart
                and Lisa.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png"
                alt="Maggie Simpson"
              />
            </TabPanel>
          </Tabs>
        </TabPanel>

        {/* ////////////// OTHER ////////////// */}

        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>OTHER tap1</Tab>
              <Tab>OTHER tap2</Tab>
              <Tab>OTHER tap3</Tab>
              <Tab>OTHER tap4</Tab>
              <Tab>OTHER tap5</Tab>
            </TabList>

            <TabPanel>
              <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png"
                alt="Homer Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
                alt="Marge Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Oldest child and only son of Homer and Marge; brother of Lisa
                and Maggie.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                alt="Bart Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Middle child and eldest daughter of Homer and Marge; sister of
                Bart and Maggie.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png"
                alt="Lisa Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Youngest child and daughter of Homer and Marge; sister of Bart
                and Lisa.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png"
                alt="Maggie Simpson"
              />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </div>
    </Tabs>
  </div>
);

// render(complexTap);

//////////////////////////////////

const simpleTap = (
  <Tabs>
    <TabList>
      <customTab>Custom Tab 1</customTab>
      <customTab>Custom Tab 2</customTab>
    </TabList>
    <TabPanel>
      <h2>Panel 1</h2>
      <h2>Panel 2</h2>
      <h2>Panel 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Panel1 1</h2>
      <h2>Panel2 2</h2>
      <h2>Panel3 3</h2>
    </TabPanel>
  </Tabs>
);

const ProjectsTap = () => {
  return <div>{complexTap}</div>;
};

export default ProjectsTap;
