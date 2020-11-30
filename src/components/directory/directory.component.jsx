import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/cvpntL1/jackets.png',
          id: 2,
          linkUrl: ''

        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/cvpntL1/sneakers.png',
          id: 3,
          linkUrl: ''

        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/cvpntL1/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''

        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/cvpntL1/mens.png',
          size: 'large',
          id: 5,
          linkUrl: ''

        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSections }) => (
          <MenuItem
            key={id}
            {...otherSections}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
