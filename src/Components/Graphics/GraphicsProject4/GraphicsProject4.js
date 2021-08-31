import React from 'react';
import '../GraphicsProject1/GraphicsProject1.scss';
import '../../../react-tabs.scss';

import Tap3Screen from '../../Tap3Screen/Tap3Screen';
import SingleSkill from '../../SingleSkill/SingleSkill';
import DescriptionHeading from '../../DescriptionHeading/DescriptionHeading';
import DescriptionParagrap from '../../DescriptionParagrap/DescriptionParagrap';
import grapsub4 from '../../../ExternalAssets/grap/logo4.svg';

const GraphicsProject4 = () => {
  return (
    <div className='tap3-container'>
      <div className='tap3'>
        <div className='tab3-border'>
          <Tap3Screen image={grapsub4} />
          <div className='skill-container'>
            <SingleSkill skill='FIGMA' />
            <SingleSkill skill='ILLUSTRATOR CC' />
          </div>

          <DescriptionHeading heading='Graphics / Synthesis' />

          <DescriptionParagrap
            paragrap='Fresh solid wood that can give you the feeling of the forest, 
            nothing can melt the heart of the wood.'
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicsProject4;
