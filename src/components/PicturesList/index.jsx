import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Picture from './components/Picture';
import './style.scss';

const PicturesList = ({ items, className, itemClassName }) => {
  return (
    <ul className={`pictures-list ${className}`}>
      {items.map(i => (
        <Picture
          item={i}
          className={itemClassName}
          key={i.id}
        />
      ))}
    </ul>
  );
};

export default observer(PicturesList);
