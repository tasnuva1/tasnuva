import React from 'react';
import '../Project1/Project1.scss';
import '../../../react-tabs.scss';

import Tap3Screen from '../../Tap3Screen/Tap3Screen';
import SingleSkill from '../../SingleSkill/SingleSkill';
import DescriptionHeading from '../../DescriptionHeading/DescriptionHeading';
import DescriptionParagrap from '../../DescriptionParagrap/DescriptionParagrap';
import production from '../../../ExternalAssets/web-dev/Veplop.mp4';

const Project4 = () => {
  return (
    <div className='tap3-container'>
      <div className='tap3'>
        <div className='tab3-border'>
          <Tap3Screen video={production} />
          <div className='skill-container'>
            <SingleSkill skill='REACTS' />
            <SingleSkill skill='AXIOS' />
            <SingleSkill skill='PICKR' />
            <SingleSkill skill='FIGMA' />
          </div>

          <DescriptionHeading heading='Web Dev / veplop' />

          <DescriptionParagrap
            paragrap='velop is a way to watch youtube videos in a costume 
            background changer interface to enhance the experience. This 
            project uses youtube API to assess the video lists thought the 
            database.'
          />

          <DescriptionParagrap
            paragrap='People can search anything and it will take the input to the 
            search parameters by useing this it will conect to the youtube 
            server and send back the video urls.'
          />
          <DescriptionParagrap
            paragrap='You can see the YouTube API documentation: 
            https://developers.google.com/youtube/v3/docs'
          />
        </div>
      </div>
    </div>
  );
};

export default Project4;
