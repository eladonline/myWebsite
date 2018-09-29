import React, { PureComponent, Fragment } from 'react';

class Layout extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default Layout;
