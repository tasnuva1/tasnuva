import React from 'react';
import './Button.style.scss';

const Button = ({ children, btn2, image }) => {
  return (
    <button className={btn2 ? 'btn-small btn-ani' : 'primary-btn'}>
      <div className='button-inner'>{children}</div>
      {image && <img src={image} alt='download-from-the-server' />}
    </button>
  );
};

// Button.defaultProps = {
//   btn: "primary-btn",
// };

export default Button;
