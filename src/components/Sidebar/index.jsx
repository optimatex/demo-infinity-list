import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import './style.scss';

@observer
class Sidebar extends Component {
  render() {
    // const {  } = this.props;
    return (
      <div className="sidebar">
        <div className="sidebar__logo">
          <img src="/assets/img/1.jpg" alt=""/>
        </div>

        <div className="sidebar__user-data">
          <span className="sidebar__user-data__avatar">
            <img src="http://i.pravatar.cc/300" alt=""/>
          </span>

          <div className="sidebar__user-data__name">
            Jonas Rogerson
          </div>
        </div>

        <nav className="sidebar__menu">
          <Link
            to="/"
            className="sidebar__menu__link"
          >
            Photos
          </Link>

          <Link
            to="/search"
            className="sidebar__menu__link"
          >
            Search
          </Link>

          <Link
            to="/animations"
            className="sidebar__menu__link"
          >
            Animations
          </Link>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
