import React from 'react';
import './ContactPage.scss';
import Headings from '../../Components/Headings/Headings';

const ContactPage = () => {
  return (
    <div className='contact-whole-container' id='contect'>
      <div className='contact-container'>
        <Headings
          heading1='CONTACT —'
          heading2='Look Who’s Here'
          // style={{ paddingTop: '11rem' }}
        />
        <div className='contact-info'>
          <Headings
            heading1='EMAIL'
            email='tasnuva.contact@gmail.com'
            heading3FontSize='2.8rem'
            style={{ paddingTop: '8rem' }}
          />
          <div className='contact-phone'>
            <Headings
              heading1='PHONE'
              heading2='+(469) 202-8047'
              heading3FontSize='2.5rem'
              style={{ paddingTop: '8rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
