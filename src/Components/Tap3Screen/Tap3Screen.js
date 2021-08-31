import React from 'react';
import './Tap3Screen.scss';

const Tap3Screen = ({ video, image }) => {
  return (
    <div className=''>
      <div className='preview'>
        {image && <img src={image} alt='preview' />}
        {video && (
          <video autoPlay muted loop>
            <source src={video} type='video/mp4' />{' '}
          </video>
        )}
      </div>
    </div>
  );
};

export default Tap3Screen;
