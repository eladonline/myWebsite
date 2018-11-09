import React, { Component } from 'react';
import Link from 'next/link';

// const solutions = 'static/image/solutions_x1.png';
// const decorated = 'static/image/decorated_x1.png';
// const googlefriendly = 'static/image/fast_and_googlefriendly_x1.jpg';

// const solutionsText = 'אתר רספונסיבי מותאם למחשב ולפלאפון כאחד';
// const decoratedText = 'עיצוב נעים לעין ומותאם לנוחיות המשתמש כך שהלקוח ירצה לטייל באתר';
// const googlefriendlyText = 'מחקרים מראים שאתר מהיר גורם למשתמשים להשאר ולבחון את שירותי האתר';

export default class SlideA extends Component {
  render() {
    const { cardA, cardB, cardC } = this.props.data.sections.bodySections.slideA;
    const { dir } = this.props.data;

    return (
      <div className="slideA" dir={dir}>
        <SlideTemplate img={cardA.img} header={cardA.header} text={cardA.text} link='solutions' />
        <SlideTemplate img={cardB.img} header={cardB.header} invert={true} text={cardB.text} link='decorated' />
        <SlideTemplate img={cardC.img} header={cardC.header} text={cardC.text} link='optimized' />
      </div>
    );
  }
}

const SlideTemplate = p => {
  return (
    <Link href={p.link}>
      <div className="slide-item" data-invert={p.invert}>
        <img src={p.img} alt="promo" />
        <header>{p.header}</header>
        <p>{p.text}</p>
      </div>
    </Link>
  );
};
