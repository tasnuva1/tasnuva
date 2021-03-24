import React from 'react';
import './Btn2.scss';

import { Link } from 'react-scroll';

const Btn2 = () => {
  return (
    <Link
      activeClass='active'
      to='contect'
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <button className='btn btn--white btn--animated'>Hire me</button>
    </Link>
  );
};

export default Btn2;
