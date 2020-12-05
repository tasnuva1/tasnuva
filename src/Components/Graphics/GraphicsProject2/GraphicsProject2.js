import React from 'react';
import '../GraphicsProject1/GraphicsProject1.scss';
import '../../../react-tabs.scss';

import Tap3Screen from '../../Tap3Screen/Tap3Screen';
import SingleSkill from '../../SingleSkill/SingleSkill';
import DescriptionHeading from '../../DescriptionHeading/DescriptionHeading';
import DescriptionParagrap from '../../DescriptionParagrap/DescriptionParagrap';
import grapsub3 from '../../../ExternalAssets/grap/logo3.svg';

const GraphicsProject2 = () => {
  return (
    <div className='tap3-container'>
      <div className='tap3'>
        <div className='tab3-border'>
          <Tap3Screen image={grapsub3} />
          <div className='skill-container'>
            <SingleSkill skill='FIGMA' />
            <SingleSkill skill='ILLUSTRATOR CC' />
          </div>

          <DescriptionHeading heading='Web Dev / spapshoot' />

          <DescriptionParagrap
            paragrap='This logo represents variations of colors and images. Spapshoot is 
            a tool for searching and downloading(medium quality) free photos on the internet.'
          />

          {/* <DescriptionParagrap
            paragrap="Synthesis is unique way to watch you favorite live game streamers
              who are playing in the same game instance, at the same time,
              together. This project uses a Node js backend with Express and
              MongoDB providing a RESTful API to the front end is completely in
              React. This is also helps enabled (useing cerbot) and cloudfire.
              This could not be develped properly with mobile in mind due to
              it's nature. All design and development from start to finish was
              done by myself."
          /> */}
        </div>
      </div>
    </div>
  );
};

export default GraphicsProject2;
