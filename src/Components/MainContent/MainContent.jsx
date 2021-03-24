import React from 'react';
import { Link } from 'react-scroll';
import './MainContent.scss';
import Navbar from '../Navbar/Navbar';

import codingScreen from '../../ExternalAssets/coding-screen.svg';
import downoadIcon from '../../ExternalAssets/download-from-server.svg';
import resume from '../../ExternalAssets/tasnuvaResume.pdf';
import Button from '../Button/Button';

const MainContent = () => {
  return (
    <div className=''>
      <div className='upper-layer'></div>
      <div className='main-container' id='main'>
        <Navbar />
        <img src={codingScreen} alt='coding' className='coding-screen' />
        <div className='main-contant'>
          <div className='main-contant1'>
            <span> HI THERE, I’M</span>
            <h1>Tasnuva.</h1>
            <h2 className='title2'>DESIGNER + DEVELOPER</h2>
            <p>I’m a UX/UI design and a front-end developer based in Dhaka.</p>
            <div className='button-resume'>
              <a
                href={resume}
                download='tasnuva-resume'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button image={downoadIcon} btn2={false}>
                  resume
                </Button>
              </a>
            </div>
          </div>
          <div className='main-contant2'>
            <div className='contant2-p'>
              <p>Some Things I've Built.</p>
              <p>You Wanna See?</p>
            </div>
            <div className='button-work'>
              <Button btn2={true}>
                <Link
                  activeClass='active'
                  to='work'
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
