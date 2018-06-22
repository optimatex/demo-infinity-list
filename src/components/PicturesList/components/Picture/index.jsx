import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const Picture = ({ item, className }) => {
  return (
    <li className={`pictures-list__item ${className}`}>
      <img src={item.thumbnailUrl} alt=""/>
    </li>
  );
};

export default observer(Picture);
