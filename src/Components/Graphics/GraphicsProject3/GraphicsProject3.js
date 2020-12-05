import React from 'react';
import '../GraphicsProject1/GraphicsProject1.scss';
import '../../../react-tabs.scss';

import Tap3Screen from '../../Tap3Screen/Tap3Screen';
import SingleSkill from '../../SingleSkill/SingleSkill';
import DescriptionHeading from '../../DescriptionHeading/DescriptionHeading';
import DescriptionParagrap from '../../DescriptionParagrap/DescriptionParagrap';
import grapsub2 from '../../../ExternalAssets/grap/logo2.svg';

const GraphicsProject3 = () => {
  return (
    <div className='tap3-container'>
      <div className='tap3'>
        <div className='tab3-border'>
          <Tap3Screen image={grapsub2} />
          <div className='skill-container'>
            <SingleSkill skill='FIGMA' />
            <SingleSkill skill='ILLUSTRATOR CC' />
          </div>

          <DescriptionHeading heading='Web Dev / veplop' />

          <DescriptionParagrap
            paragrap='This symbol represents the YouTube search functionality. 
            velop is a way to watch youtube videos in a costume background changer 
            interface to enhance the experience.'
          />
          {/* 
          <DescriptionParagrap
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

export default GraphicsProject3;
