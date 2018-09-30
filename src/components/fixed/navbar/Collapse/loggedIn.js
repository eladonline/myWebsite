import React from 'react';
import { Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Items = p => (
  <Nav pullRight>
    <NavItem className="loginNav" data-invers={p.invert}>
      <Link href="/contact" >
        <div className='navbarItem'>צור-קשר</div>
      </Link>
    </NavItem>{' '}
    {/* <NavDropdown eventKey={3} id="basic-nav-dropdown" title={'צור קשר'} noCaret>
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3}>Separated link</MenuItem>
    </NavDropdown> */}
  </Nav>
);

export default Items;

Items.defaultProps = {
  invers: 0
};

Items.propTypes = {
  invers: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};
