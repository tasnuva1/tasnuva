import React, { useState, useEffect } from 'react';
import './SubNavigation.scss';

import { Link } from 'react-scroll';

const SubNavigation = () => {
  const [isbottom, setIsbottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsbottom(true);
      }
      if (window.innerHeight + window.scrollY <= document.body.offsetHeight) {
        setIsbottom(false);
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
          className='subnav1 tooltip'
        >
          <span className='tooltiptext'>Home</span>
        </Link>
        <div className='subnav--line1'></div>
        <Link
          activeClass='subnav-active'
          to='work'
          spy={true}
          smooth={true}
          offset={38}
          duration={500}
          className='subnav2 tooltip'
        >
          <span className='tooltiptext'>Work</span>
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
            className='subnav3 tooltip'
          >
            <span className='tooltiptext'>About</span>
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
          className={
            isbottom ? 'subnav-active subnav4 tooltip' : 'subnav4 tooltip'
          }
        >
          {' '}
          <span className='tooltiptext'>Contect</span>
        </Link>
      </div>
    </div>
  );
};

export default SubNavigation;
