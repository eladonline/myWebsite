import React, { PureComponent } from 'react';

export default class Contact extends PureComponent {
  render() {
    return (
      <div className="contact">
      <h1>שלח לנו אימייל וניצור איתך קשר</h1>
        <form method="POST" action="https://formspree.io/eladonline@walla.com" dir='rtl'>
          <input type="text" name="subject" placeholder="נושא" />
          <input type="email" name="email" placeholder="אימייל לחזרה" />
          <textarea name="message" placeholder="תוכן ההודעה" />
          <button type="submit">שלח</button>
        </form>
      </div>
    );
  }
}
