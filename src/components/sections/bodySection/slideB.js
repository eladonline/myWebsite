import React, { Component } from 'react';
import { picture } from 'src/components/helpers/helpers';
import {renderBlocks} from 'src/components/helpers/helpers'

// const picture_x3 = 'static/image/weOffer.png';
// const picture_x1 = 'static/image/weOffer_x1.png';
// const picture_x2 = 'static/image/weOffer_x2.png';

// const p1 = 'את העיצוב הנוכחי של האתר + התאמה של האתר לעסק אותו אתה מפרסם ';
// const p2 = 'עזרה בקניית דומיין והעלאה של האתר לאוויר';
// const p3 = 'חוסכים לך בלאגן ומעלים את האתר לאחסון אותו קנית';

export default class SlideB extends Component {
  render() {  
    const data = this.props.data.sections.bodySections.slideB;
    const dir = this.props.data.dir
    return (
      <div className="slideB" dir={dir}>
        <header>{data.header} </header>
        {picture(<img src={data.img.x3} alt="promo" />, [data.img.x3, data.img.x2, data.img.x1],'yadaim')}
        <div className="slideB-text-cont">
        {renderBlocks(data.textBlocks)}

        </div>
      </div>
    );
  }
}


