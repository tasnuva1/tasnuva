import React from 'react';
import './Headings.scss';

const Headings = ({
  heading1,
  heading2,
  heading3FontSize,
  style,
  id,
  email,
}) => {
  return (
    <div className='headings-container' style={style} id={id}>
      {heading1 && <h2>{heading1}</h2>}
      {heading2 && (
        <h3 style={{ fontSize: `${heading3FontSize}` }}>{heading2}</h3>
      )}
      {email && (
        <h3 style={{ fontSize: `${heading3FontSize}` }}>
          {' '}
          <a
            href='mailto:tasnuva.contact@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            {email}
          </a>
        </h3>
      )}
    </div>
  );
};

export default Headings;
