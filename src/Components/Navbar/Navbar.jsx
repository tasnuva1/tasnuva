import React from 'react';
import './Navbar.scss';

import logo from '../../ExternalAssets/tasnuva-logo.svg';
import Btn2 from '../Btn2/Btn2';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header>
      <div className='navbar-container'>
        <Link
          activeClass='active'
          to='main'
          spy={true}
          smooth={true}
          offset={30}
          duration={500}
        >
          <img src={logo} alt='Logo' />
        </Link>

        <nav className='nav-links'>
          <div className='nav-link'>
            <Link
              activeClass='active'
              to='main'
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              Home
            </Link>
          </div>
          <div className='nav-link'>
            <Link
              activeClass='active'
              to='work'
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              Portfolio
            </Link>
          </div>
          <div className='nav-link'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
            >
              About
            </Link>
          </div>
          <div className='nav-link'>
            <Link
              activeClass='active'
              to='contect'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contect
            </Link>
          </div>
          <div className='nav-link'>
            <Link
              activeClass='active'
              to='section1'
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              <Btn2 />{' '}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
