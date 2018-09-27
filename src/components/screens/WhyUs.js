import React, { Component } from 'react';
import {renderBlocks} from 'src/components/helpers/helpers'

export default class WhyUs extends Component {

  render() {
    const text = this.props.text.whyUs;
    const dir = this.props.text.dir

    return (
      <div className="whyUs" dir={dir}>
        <header>
          <h1>{text.header}</h1>
        </header>
        {renderBlocks(text.textBlocks)}
      </div>
    );
  }
}
