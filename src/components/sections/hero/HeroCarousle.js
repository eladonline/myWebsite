import React from 'react';
import { picture } from 'src/components/helpers/helpers';
import { Carousel } from 'react-bootstrap';

// const background_1_x1 = 'static/image/background_1_x1.jpg';
// const background_1_x2 = 'static/image/background_1_x2.jpg';
// const background_1_x3 = 'static/image/background_1_x3.jpg';

// const background_2 = 'static/image/backgrounds_2_x3.jpg';
// const background_2x1 = 'static/image/backgrounds_2_x1.jpg';
// const background_2x2 = 'static/image/backgrounds_2_x2.jpg';

// const background_3_x3 = 'static/image/backgrounds_3_x3.jpg';
// const background_3_x1 = 'static/image/backgrounds_3_x1.jpg';
// const background_3_x2 = 'static/image/backgrounds_3_x2.jpg';


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
  parseData(data) {
    const { extraHead, img } = data;
    return extraHead.map((headers, i) => {
      return (
        <Carousel.Item key={`jumbotron-${i}`}>
          {picture(<img alt="profile" src={img[i][2]} />, img[i], `jumbo${i}`)}
          <Overlay h1={headers.h1} h2={headers.h2} />
        </Carousel.Item>
      );
    });
  }
  render() {
    const { data } = this.props;
    return (
      <div id="hero_main_container">
        <Carousel pauseOnHover={false} controls={false}>
          {this.parseData(data)}
        </Carousel>
      </div>
    );
  }
}
