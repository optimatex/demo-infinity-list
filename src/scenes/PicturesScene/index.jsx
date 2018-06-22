import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Waypoint from 'react-waypoint';

import PicturesList from 'components/PicturesList';
import './style.scss';

@observer
class PicturesScene extends Component {
  componentWillMount() {
    this.loadData(this.props);
  }

  loadData = (props) => {
    const { app } = props;
    app.pictures.tryGetPictures();
  };

  handlePositionChange = (pos) => {
    console.log('%c pos', 'color: #0087d4', pos);
    console.log('%c pos', 'color: #b8ff0a', pos.waypointBottom, pos.viewportBottom);
  }

  render() {
    const { app } = this.props;
    const { pictures } = app;
    const { collection, isBannedFetch, isLoading } = pictures;
    return (
      <div className="">
        <PicturesList
          items={collection}
          className="pictures-scene__list"
          itemClassName="pictures-scene__item"
        />

        {!isBannedFetch && (
          <Waypoint
            scrollableAncestor={global.CLIENT ? window : ''}
            onEnter={pictures.tryGetPictures}
            bottomOffset="-50%"
          />
        )}
      </div>
    );
  }
}

export default PicturesScene;
