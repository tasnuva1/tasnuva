import React from 'react';
import './GraphicsProject1.scss';
import '../../../react-tabs.scss';

import Tap3Screen from '../../Tap3Screen/Tap3Screen';
import SingleSkill from '../../SingleSkill/SingleSkill';
import DescriptionHeading from '../../DescriptionHeading/DescriptionHeading';
import DescriptionParagrap from '../../DescriptionParagrap/DescriptionParagrap';
import grapsub1 from '../../../ExternalAssets/grap/logo1.svg';

const GraphicsProject1 = () => {
  return (
    <div className='tap3-container'>
      <div className='tap3'>
        <div className='tab3-border'>
          <Tap3Screen image={grapsub1} />
          <div className='skill-container'>
            <SingleSkill skill='FIGMA' />
            <SingleSkill skill='ILLUSTRATOR CC' />
          </div>

          <DescriptionHeading heading='Web Dev / realHousey' />

          <DescriptionParagrap
            paragrap='realHousey is a way to find the best Properties who are searching 
            for properties or real state agent and for finding the real state agents that 
            can help people with there needs.'
          />

          <DescriptionParagrap paragrap='This logo represents houses and services that the company offers.' />
        </div>
      </div>
    </div>
  );
};

export default GraphicsProject1;
