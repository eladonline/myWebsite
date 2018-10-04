import React, { PureComponent } from 'react';
import {renderBlocks} from 'src/components/helpers/helpers'

export default class Optimized extends PureComponent {
  render() {
    const text = this.props.text.optimized;
    const { dir } = this.props.text;
    return (
      <div className="optimized" dir={dir}>
        <header>
          <h1>{text.header}</h1>
        </header>
        {renderBlocks(text.textBlocks)}
      </div>
    );
  }
}
