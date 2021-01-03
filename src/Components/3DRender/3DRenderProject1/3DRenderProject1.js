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
            <SingleSkill skill='FIGMA' />
            <SingleSkill skill='KEYSHOT 9' />
            <SingleSkill skill='SketchUp' />
            <SingleSkill skill='PHOTOSHOP CC' />
          </div>

          <DescriptionHeading heading='3D Render / Books Playlist Website' />

          <DescriptionParagrap
            paragrap="The site featuring a wide range of books ranging from a variety 
            of categories like playlists of books. Like Spotify's songs playlists, it's 
            books playlists."
          />
          <DescriptionParagrap
            paragrap='This design I made using keyshot 9. Keyshot is a 3D Rendering and 
            Animation Software. KeyShot brings you real-time 3D rendering that displays results 
            instantly.'
          />
          <DescriptionParagrap
            paragrap='SketchUp is a 3D modeling computer program for a wide range of drawing 
            applications such as architectural, interior design, landscape architecture, civil and 
            mechanical engineering, film and video game design.'
          />
        </div>
      </div>
    </div>
  );
};

export default ThreeDRenderProject1;
