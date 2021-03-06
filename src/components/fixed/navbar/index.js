import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Brand from './Brand/Brand';
import Login from './Collapse/login';
import LoggedIn from './Collapse/loggedIn';
import PropTypes from 'prop-types';

const brand = '/static/icon/we_factor_logo.png';
const brand_invert = '/static/icon/we_factor_logo_invert.png';

export default class MainNavbar extends Component {
  /**
   *
   * @param {number} prevProps.offset
   * @param {number} prevState.offset
   * @summary detect change in the invers prop
   */
  /**
   *
   * @param {string} user
   * @return login or loggedIn state to view
   */
  isLoggedIn(user) {
    // 'Unsigned' Linked to private Layout
    return user ? <LoggedIn invert={this.props.invert} /> : <Login />;
  }

  render() {
    return (
      <Navbar collapseOnSelect id="mainNavbar">
        <Navbar.Header>
          <Brand image={this.props.invert  ?brand_invert :brand} />
        </Navbar.Header>
        {this.isLoggedIn('elad+1@committed.co.il')}
      </Navbar>
    );
  }
}

MainNavbar.defaultProps = {
  invert: 0
};

MainNavbar.propTypes = {
  invert: PropTypes.number
};
