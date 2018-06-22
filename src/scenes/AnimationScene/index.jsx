import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import './style.scss';

const AnimationScene = (props) => {
  return (
    <div className="animation-scene">
      <button className="animation-scene__button animation-scene__button--grow">
        Grow on hover
      </button>

      <button className="animation-scene__button animation-scene__button--shrink">
        Shrink on hover
      </button>

      <button className="animation-scene__button animation-scene__button--color">
        Color change on hover
      </button>


      <div className="animation-scene__round">
        <div className="animation-scene__round__container">
          <div className="animation-scene__round__shape"></div>
        </div>
      </div>

      <div className="animation-scene__flash">
        Flash
      </div>
    </div>
  );
};

export default observer(AnimationScene);
