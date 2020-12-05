import React from 'react';
import './Project1.scss';
import '../../../react-tabs.scss';

import Tap3Screen from '../../Tap3Screen/Tap3Screen';
import SingleSkill from '../../SingleSkill/SingleSkill';
import DescriptionHeading from '../../DescriptionHeading/DescriptionHeading';
import DescriptionParagrap from '../../DescriptionParagrap/DescriptionParagrap';
import production from '../../../ExternalAssets/production.mp4';

const Project1 = () => {
  return (
    <div className='tap3-container'>
      <div className='tap3'>
        <div className='tab3-border'>
          <Tap3Screen video={production} />
          <div className='skill-container'>
            <SingleSkill skill='REACTS' />
            <SingleSkill skill='SCSS' />
            <SingleSkill skill='CONTENTFUL' />
            <SingleSkill skill='FIGMA' />
            <SingleSkill skill='PHOTOSHOP CC' />
            <SingleSkill skill='ILLUSTRATOR CC' />
          </div>

          <DescriptionHeading heading='Web Dev / realHousey' />

          <DescriptionParagrap
            paragrap='realHousey is a way to find the best Properties who are 
            searching for properties or real state agent and for finding the 
            real state agents that can help people with there needs. This            
            project uses a contentful backend which is for visually explore and 
            manipulate your data. Manage the data in a graphical user interface and providing a restful API to the            
            front end, and the front-end is completely in react.'
          />

          <DescriptionParagrap
            paragrap='This project use react-router for routing, 
          react context API for our state management, and Contentful - headless CMS 
          for data management. This is developed with mobile responsiveness in mind. 
          All design and development from start to finish was done by myself.'
          />
        </div>
      </div>
    </div>
  );
};

export default Project1;
