import React, { PureComponent } from 'react';
import {renderBlocks} from 'src/components/helpers/helpers'

export default class Solution extends PureComponent {
  render() {
    const text = this.props.text.solutions;
    const { dir } = this.props.text;
    return (
      <div className="solutions" dir={dir}>
        <header>
          <h1>{text.header}</h1>
        </header>
        {renderBlocks(text.textBlocks)}
      </div>
    );
  }
}
