import React, { PureComponent } from 'react';
import Link from 'next/link';
export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer" dir='rtl'>
        <Link href='/about'>
          <p>קצת עלינו</p>
        </Link>
        <Link href='/whyUs'>
          <p>למה דווקא אנחנו</p>
        </Link>
        <div> &copy; כל הזכויות שמורות לחברת We factoR</div>
      </footer>
    );
  }
}
