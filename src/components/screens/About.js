import React, { PureComponent } from 'react';
import {renderBlocks} from 'src/components/helpers/helpers'

export default class About extends PureComponent {
  render() {
    const text = this.props.text.about;
    const dir = this.props.text.dir;

    return (
      <div className="about" dir={dir}>
        <header>
          <h1>{text.header}</h1>
        </header>
        {renderBlocks(text.textBlocks)}
      </div>
    );
  }
}
