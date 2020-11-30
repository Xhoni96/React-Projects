import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, size, history, linkUrl,match }) => (
  <figure className="menu-container" >
    <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">shop now</span>
      </div>
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      
    </div>
  </figure>
);
export default withRouter(MenuItem);
