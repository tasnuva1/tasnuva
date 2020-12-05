import React from 'react';
import './SingleTap2.scss';

import DEMO from '../../ExternalAssets/DEMO.svg';
import codelink from '../../ExternalAssets/web-code-link.svg';
import tap2back from '../../ExternalAssets/tap2-hover-back.svg';

const SingleTap2 = ({ image, heading, url, codeUrl }) => {
  return (
    <div className='img1' style={{ backgroundImage: `url(${image})` }}>
      <div className='web-links-container'>
        <div className='web-links'>
          {url && (
            <a href={url} target='_blank' rel='noopener noreferrer'>
              <img src={DEMO} alt='demo-website' />
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target='_blank' rel='noopener noreferrer'>
              <img src={codelink} alt='code-link' />
            </a>
          )}
        </div>
      </div>
      <div
        className='tap2-back'
        style={{ backgroundImage: `url(${tap2back})` }}
      >
        <p>{heading}</p>
      </div>
    </div>
  );
};

export default SingleTap2;
