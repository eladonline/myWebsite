import React, { Component, Fragment } from 'react';
import HeroCarousle from 'src/components/sections/hero/HeroCarousle';
import Section from 'src/components/sections/bodySection/bodySection';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {text} = this.props 
    return (
      <div className='body-cont' dir={text.dir}>
        <HeroCarousle data={text.hero} />
        <Section data={text}/>
      </div>
    );
  }
}
