import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import PicturesScene from 'scenes/PicturesScene';
import AnimationScene from 'scenes/AnimationScene';
import '__style__/index.scss';
import './style.scss';

@observer
class AppLayout extends Component {
  render() {
    const { app } = this.props;
    return (
      <div className="app-layout">
        <Sidebar />

        <section className="app-layout__content">
          <Switch>
            <Route
              path={'/'} exact
              render={props => <PicturesScene {...props} app={app} />}
            />

            <Route
              path={'/animations'}
              component={AnimationScene}
            />
          </Switch>
        </section>
      </div>
    );
  }
}

export default AppLayout;
