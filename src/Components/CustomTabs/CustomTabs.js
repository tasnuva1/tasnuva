import React, { useState } from "react";
import SingleTap2 from "../SingleTap2/SingleTap2";
import "./CustomTabs.scss";

import pro1 from "../../ExternalAssets/web-dev/realhousey.jpg";
import pro2 from "../../ExternalAssets/web-dev/search.jpg";
import pro3 from "../../ExternalAssets/web-dev/spapshoot.jpg";
import pro4 from "../../ExternalAssets/web-dev/veplop.jpg";

import Project1 from "../WebDev/Project1/Project1";
import Project2 from "../WebDev/Project2/Project2";
import Project3 from "../WebDev/Project3/Project3";
import Project4 from "../WebDev/Project4/Project4";

function CustomTabs() {
  const [toggleState, setToggleState] = useState(1);
  const [contentActive, setContentActive] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const activeContentHandel = (index) => {
    setContentActive(index);
  };
  return (
    <div className="tab-container">
      <div className="main-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <h3> WEB DEV </h3>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <h3> GRAPHICS </h3>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <h3> 3D RENDER </h3>
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          <h3> OTHER </h3>
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="content-row-container">
            <div className="content-row-1">
              <button onClick={activeContentHandel(1)}>
                <SingleTap2
                  image={pro1}
                  url="http://realhousey.com/"
                  codeUrl="https://github.com/tasnuva1/realHousey"
                  heading="Web Dev // realhousey"
                />
              </button>
              <button onClick={activeContentHandel(2)}>
                <SingleTap2
                  image={pro2}
                  url="http://realhousey.com/"
                  codeUrl="https://github.com/tasnuva1/realHousey"
                  heading="Web Dev // realhousey"
                />
              </button>
              <button onClick={activeContentHandel(3)}>
                <SingleTap2
                  image={pro3}
                  url="https://spapshoot.netlify.app/"
                  codeUrl="https://github.com/tasnuva1/spapshoot"
                  heading="Web Dev // spapshoot"
                />
              </button>
              <button onClick={activeContentHandel(4)}>
                <SingleTap2
                  image={pro4}
                  url="https://veplop.netlify.app/"
                  codeUrl="https://github.com/tasnuva1/veplop"
                  heading="Web Dev // veplop"
                />
              </button>

              {/* 
                  <SingleTap2
                    image={pro3}
                    url='http://google.com/'
                    heading='Web Dev // realhousey'
                  />
                 */}
            </div>
            <div className="content-row-2">
              <div
                className={
                  contentActive === 1 ? "content  active-content" : "content"
                }
              >
                <Project1 />
              </div>
              <div
                className={
                  contentActive === 2 ? "content  active-content" : "content"
                }
              >
                <Project2 />
              </div>
              <div
                className={
                  contentActive === 3 ? "content  active-content" : "content"
                }
              >
                <Project3 />
              </div>
              <div
                className={
                  contentActive === 4 ? "content  active-content" : "content"
                }
              >
                <Project4 />
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomTabs;
