import React from 'react';
import './3DRenderProject1.scss';
import '../../../react-tabs.scss';

import Tap3Screen from '../../Tap3Screen/Tap3Screen';
import SingleSkill from '../../SingleSkill/SingleSkill';
import DescriptionHeading from '../../DescriptionHeading/DescriptionHeading';
import DescriptionParagrap from '../../DescriptionParagrap/DescriptionParagrap';
import web1 from '../../../ExternalAssets/3D-objects/web1.svg';

const ThreeDRenderProject1 = () => {
  return (
    <div className='tap3-container'>
      <div className='tap3'>
        <div className='tab3-border'>
          <Tap3Screen image={web1} />
          <div className='skill-container'>
            <SingleSkill skill='REACTS' />
            <SingleSkill skill='REDUX' />
            <SingleSkill skill='NODE' />
            <SingleSkill skill='EXPRESS' />
            <SingleSkill skill='FIGMA' />
            <SingleSkill skill='PHOTOSHOP CC' />
          </div>

          <DescriptionHeading heading='Web Dev / Synthesis' />

          <DescriptionParagrap
            paragrap="The site featuring a wide range of books ranging from a variety 
            of categories like playlists of books. Like Spotify's songs playlists, it's 
            books playlists."
          />
        </div>
      </div>
    </div>
  );
};

export default ThreeDRenderProject1;
