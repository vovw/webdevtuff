import React from 'react';
import './Contact.css'; // Import your CSS file
import Fotter from '../../fotter/fotter';
const ContactPage = () => {
  return (
    <div className="contact-page">
      <header>
        <h1>Contact Us</h1>
        <p></p>
      </header>
      <div className="content">
        <div className="content-form">
          <section>
            <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
            <h2>address</h2>
            <p> VJTI MUMBAI <br /></p>
          </section>

          <section>
            <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
            <h2>Phone</h2>
            <p>123-456-78901548</p>
          </section>

          <section>
            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
            <h2>E-mail</h2>
            <p>@@@@@@@@</p>
          </section>
        </div>
      </div>

      <form>
        <div className="form">
          <div className="right">
            <div className="contact-form">
              <input type="text" required />
              <span>Full Name</span>
            </div>

            <div className="contact-form">
              <input type="E-mail" required />
              <span>E-mail Id</span>
            </div>
            <div className="contact-form">
              <textarea name="text"></textarea>
              <span> Type your Message....</span>
            </div>

            <div className="contact-form">
              <input type="submit" name="submit" />
            </div>
          </div>
        </div>
      </form>
      <Fotter position="static" />
    </div>
  );
};

export default ContactPage;
