import React from 'react';
import { picture } from 'src/components/helpers/helpers';
import { Carousel } from 'react-bootstrap';

const background_1_x1 = 'static/image/backgrounds_1_x1.png';
const background_1_x2 = 'static/image/backgrounds_1_x2.png';
const background_1 = 'static/image/backgrounds_1.png';
const background_2 = 'static/image/backgrounds_2.png';
const background_2x1 = 'static/image/backgrounds_2_x1.png';
const background_2x2 = 'static/image/backgrounds_2_x2.png';

const Overlay = p => (
  <div className="hero-overlay">
    {/* you can remove me from the
      <Carousel.Item>
      and drop me in <div id='hero_main_container'>
      and i wont move with the pictures */}
    <h1>{p.h1}</h1>
    <h2>{p.h2}</h2>
  </div>
);

export default class HeroCarousle extends React.PureComponent {
  render() {
    return (
      <div id="hero_main_container">
        <Carousel pauseOnHover={false} controls={false}>
          <Carousel.Item>
            {picture(
              <img alt="profile" src={background_1} />,
              [background_1, background_1_x2, background_1_x1],
              'tzuk'
            )}
            <Overlay h1="ברוך הבא לאתר החדש שלך!" h2="הלקוחות שלך מחכים!" />
          </Carousel.Item>
          <Carousel.Item>
            {picture(
              <img alt="profile" src={background_2} />,
              [background_2, background_2x2, background_2x1],
              'hamaniot'
            )}
            <Overlay h1="כל תמונה שעוברת אפשר לפרסם משהו אחר" h2="אז למה לא לתפוס את כולם!" />
          </Carousel.Item>
          <Carousel.Item>
          {picture(
              <img alt="profile" src={background_1} />,
              [background_1, background_1_x2, background_1_x1],
              'tzuk2'
            )}

            <Overlay h1="אתר בנוי למכירה" h2={'בניית אתרים'} />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
