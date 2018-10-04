import React, { PureComponent } from 'react';
import { renderBlocks } from 'src/components/helpers/helpers';

export default class Decorated extends PureComponent {
  render() {
    const text = this.props.text.decorated;
    const { dir } = this.props.text;
    return (
      <div className="decorated" dir={dir}>
        <header>
          <h1>{text.header}</h1>
        </header>
        {renderBlocks(text.textBlocks)}
      </div>
    );
  }
}
