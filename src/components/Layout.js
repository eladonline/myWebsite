import React, { PureComponent, Fragment } from 'react';
import text from 'src/text/main.json';
import Navbar from 'components/fixed/navbar';
import Footer from 'components/sections/footer/footer';
import { hudiniElement } from 'components/helpers/helpers';

export default class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { invert: 0 };
  }
  componentDidMount() {
    const el = document.querySelector('#mainNavbar');
    if (window) {
      document.addEventListener('scroll', () => {
        hudiniElement(el, ['transparent', 'rgb(241, 241, 241)'], !window.scrollY);
        this.setState({ invert: window.scrollY });
      });
    }
  }
  render() {
    const { children, router } = this.props.query;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        text,
        router
      })
    );
    return (
      <Fragment>
        <Navbar invert={this.state.invert} />
        {childrenWithProps}
        <Footer />
      </Fragment>
    );
  }
}
