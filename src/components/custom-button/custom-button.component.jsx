import React from 'react';

import './custom-button.styles.scss';

/* children props eshte me destructuring dhe perfaqeson cfaredo qe do vendosesh 
brenda opening and closing brackets of the component */

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
