import React from 'react';
import '../Project1/Project1.scss';
import '../../../react-tabs.scss';

import Tap3Screen from '../../Tap3Screen/Tap3Screen';
import SingleSkill from '../../SingleSkill/SingleSkill';
import DescriptionHeading from '../../DescriptionHeading/DescriptionHeading';
import DescriptionParagrap from '../../DescriptionParagrap/DescriptionParagrap';
import production from '../../../ExternalAssets/web-dev/Realhousey2.mp4';

const Project2 = () => {
  return (
    <div className='tap3-container'>
      <div className='tap3'>
        <div className='tab3-border'>
          <Tap3Screen video={production} />
          <div className='skill-container'>
            <SingleSkill skill='REACTS' />
            <SingleSkill skill='CONTENTFUL' />
            <SingleSkill skill='FIGMA' />
            <SingleSkill skill='PHOTOSHOP CC' />
            <SingleSkill skill='ILLUSTRATOR CC' />
          </div>

          <DescriptionHeading heading='Web Dev / realHousey' />

          <DescriptionParagrap
            paragrap='Search Filter Features:
            The filter contains different search options such as house type, 
            house state, house beds, house baths, house price, and house 
            sqft.'
          />

          <DescriptionParagrap
            paragrap="Depending on the search filter It's going to dynamically render 
            the list of houses from the database."
          />
        </div>
      </div>
    </div>
  );
};

export default Project2;
