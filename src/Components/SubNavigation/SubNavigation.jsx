import React, { useState, useEffect } from 'react';
import './SubNavigation.scss';

import { Link } from 'react-scroll';

const SubNavigation = () => {
  const [isbottom, setIsbottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsbottom(true);
        console.log('Now on the Bottom.');
      }
      if (window.innerHeight + window.scrollY <= document.body.offsetHeight) {
        setIsbottom(false);
        console.log('Now on the Top.');
      }
    });
  });

  return (
    <div className='subnav-container'>
      <div className='subnav'>
        <Link
          activeClass='subnav-active'
          to='main'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className='subnav1'
        >
          {/* <div className='subnav1 subnav-active'></div> */}
        </Link>
        <div className='subnav--line1'></div>
        <Link
          activeClass='subnav-active'
          to='work'
          spy={true}
          smooth={true}
          offset={38}
          duration={500}
          className='subnav2'
        >
          {/* <div className='subnav2'></div> */}
        </Link>
        <div className='subnav--line2'></div>
        {
          <Link
            activeClass={isbottom ? '' : 'subnav-active'}
            to='about'
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            className='subnav3'
            // onScroll={handleScroll}
          >
            {/* <div className='subnav3'></div> */}
          </Link>
        }
        <div className='subnav--line3'></div>

        <Link
          activeClass='subnav-active'
          to='contect'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={isbottom ? 'subnav-active subnav4' : 'subnav4'}
        >
          {' '}
          {/* <div className='subnav4'></div> */}
        </Link>

        {/* <div className='subnav--line4'></div> */}
      </div>
    </div>
  );
};

export default SubNavigation;
