import React from 'react';
import './ProjectsTap.scss';
import '../../react-tabs.scss';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import SingleTap2 from '../SingleTap2/SingleTap2';
import pro1 from '../../ExternalAssets/web-dev/realhousey.jpg';
import pro2 from '../../ExternalAssets/web-dev/search.jpg';
import pro3 from '../../ExternalAssets/web-dev/spapshoot.jpg';
import pro4 from '../../ExternalAssets/web-dev/veplop.jpg';

import grapsub1 from '../../ExternalAssets/grap/logo1.svg';
import grapsub2 from '../../ExternalAssets/grap/logo2.svg';
import grapsub3 from '../../ExternalAssets/grap/logo3.svg';
import grapsub4 from '../../ExternalAssets/grap/logo4.svg';

import threeDweb1 from '../../ExternalAssets/3D-objects/web1.svg';

import Tab1 from '../Tab1/Tab1';

import Project1 from '../WebDev/Project1/Project1';
import Project2 from '../WebDev/Project2/Project2';
import Project3 from '../WebDev/Project3/Project3';
import Project4 from '../WebDev/Project4/Project4';

import GraphicsProject1 from '../Graphics/GraphicsProject1/GraphicsProject1';
import GraphicsProject2 from '../Graphics/GraphicsProject2/GraphicsProject2';
import GraphicsProject3 from '../Graphics/GraphicsProject3/GraphicsProject3';
import GraphicsProject4 from '../Graphics/GraphicsProject4/GraphicsProject4';
import GraphicsProject5 from '../Graphics/GraphicsProject5/GraphicsProject5';

import ThreeDRenderProject1 from '../3DRender/3DRenderProject1/3DRenderProject1';
import ThreeDRenderProject2 from '../3DRender/3DRenderProject2/3DRenderProject2';
import ThreeDRenderProject3 from '../3DRender/3DRenderProject3/3DRenderProject3';
import ThreeDRenderProject4 from '../3DRender/3DRenderProject4/3DRenderProject4';
import ThreeDRenderProject5 from '../3DRender/3DRenderProject5/3DRenderProject5';

import OtherProject1 from '../Other/OtherProject1/OtherProject1';
import OtherProject2 from '../Other/OtherProject2/OtherProject2';
import OtherProject3 from '../Other/OtherProject3/OtherProject3';
import OtherProject4 from '../Other/OtherProject4/OtherProject4';
import OtherProject5 from '../Other/OtherProject5/OtherProject5';

const customTab = ({ children }) => (
  <Tab>
    <h1>{children}</h1>
  </Tab>
);

customTab.tabsRole = 'Tab'; // Required field to use your custom

const complexTap = (
  <div className='projectpage-container'>
    <Tabs forceRenderTabPanel defaultIndex={1}>
      <div className='tap-whole-container'>
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
              <div className='tap2'>
                <Tab>
                  <SingleTap2
                    image={pro1}
                    url='http://realhousey.com/'
                    codeUrl='https://github.com/tasnuva1/realHousey'
                    heading='Web Dev // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={pro2}
                    url='http://realhousey.com/'
                    codeUrl='https://github.com/tasnuva1/realHousey'
                    heading='Web Dev // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={pro3}
                    url='https://spapshoot.netlify.app/'
                    codeUrl='https://github.com/tasnuva1/spapshoot'
                    heading='Web Dev // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={pro4}
                    url='https://veplop.netlify.app/'
                    codeUrl='https://github.com/tasnuva1/veplop'
                    heading='Web Dev // realhousey'
                  />
                </Tab>
                {/* <Tab>
                  <SingleTap2
                    image={pro3}
                    url='http://google.com/'
                    heading='Web Dev // realhousey'
                  />
                </Tab> */}
              </div>
            </TabList>
            <TabPanel>
              <Project1 />
            </TabPanel>
            <TabPanel>
              <Project2 />
            </TabPanel>
            <TabPanel>
              <Project3 />
            </TabPanel>
            <TabPanel>
              <Project4 />
            </TabPanel>
            {/* <TabPanel>
              <Project5 />
            </TabPanel> */}
          </Tabs>
        </TabPanel>
        {/* ////////////// GRAPHICS ////////////// */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            {/* <Tabs> */}
            <TabList>
              <div className='tap2'>
                <Tab>
                  <SingleTap2
                    image={grapsub1}
                    heading='Graphics // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={grapsub3}
                    heading='Graphics // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={grapsub2}
                    heading='Graphics // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={grapsub4}
                    heading='Graphics // realhousey'
                  />
                </Tab>
                {/* <Tab>
                  <SingleTap2
                    image={pro1}
                    url='http://google.com/'
                    heading='Graphics // realhousey'
                  />
                </Tab> */}
              </div>
            </TabList>
            <TabPanel>
              <GraphicsProject1 />
            </TabPanel>
            <TabPanel>
              <GraphicsProject2 />
            </TabPanel>
            <TabPanel>
              <GraphicsProject3 />
            </TabPanel>
            <TabPanel>
              <GraphicsProject4 />
            </TabPanel>
            {/* <TabPanel>
              <GraphicsProject5 />
            </TabPanel> */}
          </Tabs>
        </TabPanel>

        {/* ////////////// 3D RENDER ////////////// */}

        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <div className='tap2'>
                <Tab style={{ height: 167 }}>
                  <SingleTap2
                    image={threeDweb1}
                    heading='3D Render // Books playlist website'
                  />
                </Tab>
                {/* <Tab>
                  <SingleTap2
                    image={pro1}
                    url='http://google.com/'
                    heading='3D Render // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={pro1}
                    url='http://google.com/'
                    heading='3D Render // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={pro1}
                    url='http://google.com/'
                    heading='3D Render // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={pro1}
                    url='http://google.com/'
                    heading='3D Render // realhousey'
                  />
                </Tab> */}
              </div>
            </TabList>

            <TabPanel>
              <ThreeDRenderProject1 />
            </TabPanel>
            {/* <TabPanel>
              <ThreeDRenderProject2 />
            </TabPanel>
            <TabPanel>
              <ThreeDRenderProject3 />
            </TabPanel>
            <TabPanel>
              <ThreeDRenderProject4 />
            </TabPanel>
            <TabPanel>
              <ThreeDRenderProject5 />
            </TabPanel> */}
          </Tabs>
        </TabPanel>

        {/* ////////////// OTHER ////////////// */}

        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <div className='tap2'>
                {/* <Tab>
                  <SingleTap2
                    image={pro1}
                    url='http://google.com/'
                    heading='Other // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={pro1}
                    url='http://google.com/'
                    heading='Other // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={pro1}
                    url='http://google.com/'
                    heading='Other // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={pro1}
                    url='http://google.com/'
                    heading='Other // realhousey'
                  />
                </Tab>
                <Tab>
                  <SingleTap2
                    image={pro1}
                    url='http://google.com/'
                    heading='Other // realhousey'
                  />
                </Tab> */}
              </div>
            </TabList>
            {/* <TabPanel>
              <OtherProject1 />
            </TabPanel>
            <TabPanel>
              <OtherProject2 />
            </TabPanel>
            <TabPanel>
              <OtherProject3 />
            </TabPanel>
            <TabPanel>
              <OtherProject4 />
            </TabPanel>
            <TabPanel>
              <OtherProject5 />
            </TabPanel> */}
          </Tabs>
        </TabPanel>
      </div>
    </Tabs>
  </div>
);

// const simpleTap = (
//   <Tabs>
//     <TabList>
//       <customTab>Custom Tab 1</customTab>
//       <customTab>Custom Tab 2</customTab>
//     </TabList>
//     <TabPanel>
//       <h2>Panel 1</h2>
//       <h2>Panel 2</h2>
//       <h2>Panel 3</h2>
//     </TabPanel>
//     <TabPanel>
//       <h2>Panel1 1</h2>
//       <h2>Panel2 2</h2>
//       <h2>Panel3 3</h2>
//     </TabPanel>
//   </Tabs>
// );

const ProjectsTap = () => {
  return <div>{complexTap}</div>;
};

export default ProjectsTap;
