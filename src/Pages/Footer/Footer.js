import React from 'react';
import './Footer.scss';

import Headings from '../../Components/Headings/Headings';

import recreate from '../../ExternalAssets/recreate-mode.svg';

const Footer = () => {
  return (
    <div className='footer-whole-container' id='contect'>
      <div className='footer-container'>
        <Headings heading1='© 2020 TASNUVA MASURA' />
        <img src={recreate} alt='recreate' />
      </div>
    </div>
  );
};

export default Footer;
