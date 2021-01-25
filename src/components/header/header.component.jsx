import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';

const Header = ({ currentUser }) => (
  <header className="header">
    <Link to="/" className="header_logo-container">
      <Logo className="header_logo" />
    </Link>
    <div className="header_item-container">
      <Link to="/shop" className="header_item">
        Shop
      </Link>
      <Link to="/contact" className="header_item">
        Contact
      </Link>

      {currentUser ? (
        <Link to="" className="header_item" onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
      ) : (
        <Link className="header_item" to="/signin">
          SIGN IN
        </Link>
      )}

      <Link
        to="/shoping-cart"
        className="header_shoping-cart--container"
      ></Link>
    </div>
  </header>
);

export default Header;
