import React from 'react';
import '../3DRenderProject1/3DRenderProject1.scss';
import '../../../react-tabs.scss';

import Tap3Screen from '../../Tap3Screen/Tap3Screen';
import SingleSkill from '../../SingleSkill/SingleSkill';
import DescriptionHeading from '../../DescriptionHeading/DescriptionHeading';
import DescriptionParagrap from '../../DescriptionParagrap/DescriptionParagrap';
import production from '../../../ExternalAssets/production.mp4';

const ThreeDRenderProject3 = () => {
  return (
    <div className='tap3-container'>
      <div className='tap3'>
        <div className='tab3-border'>
          <Tap3Screen video={production} />
          <div className='skill-container'>
            <SingleSkill skill='REACTS' />
            <SingleSkill skill='REDUX' />
            <SingleSkill skill='NODE' />
            <SingleSkill skill='EXPRESS' />
            <SingleSkill skill='FIGMA' />
            <SingleSkill skill='PHOTOSHOP CC' />
          </div>

          <DescriptionHeading heading='3D Render / Synthesis' />

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
  );
};

export default ThreeDRenderProject3;
