import React from 'react';
import '../Project1/Project1.scss';
import '../../../react-tabs.scss';

import Tap3Screen from '../../Tap3Screen/Tap3Screen';
import SingleSkill from '../../SingleSkill/SingleSkill';
import DescriptionHeading from '../../DescriptionHeading/DescriptionHeading';
import DescriptionParagrap from '../../DescriptionParagrap/DescriptionParagrap';
import production from '../../../ExternalAssets/web-dev/Spapshoot.mp4';

const Project3 = () => {
  return (
    <div className='tap3-container'>
      <div className='tap3'>
        <div className='tab3-border'>
          <Tap3Screen video={production} />
          <div className='skill-container'>
            <SingleSkill skill='REACTS' />
            <SingleSkill skill='AXIOS' />
            <SingleSkill skill='GSAP' />
            <SingleSkill skill='FIGMA' />
            <SingleSkill skill='PHOTOSHOP CC' />
          </div>

          <DescriptionHeading heading='Web Dev / spapshoot' />

          <DescriptionParagrap
            paragrap='Spapshoot is a tool for searching and downloading(medium 
              quality) free photos on the internet. This project uses unsplash 
              API to the front end. The front-end is completed in react and 
              gsap. gsap - which handles complex animations. This is 
              developed with mobile responsiveness in mind. All design and 
              development from start to finish was done by myself.'
          />
        </div>
      </div>
    </div>
  );
};

export default Project3;
