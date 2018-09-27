import React, { Component } from 'react';
import SlideA from './slideA';
import SlideB from './slideB';

export default class Section extends Component {
  render() {
    return (
      <div className="Section">
        <SlideA data={this.props.data}/>
        <SlideB data={this.props.data}/>
      </div>
    );
  }
}
