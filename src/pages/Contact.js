import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Nima Rahmanian via email @ nimsi@berkeley.edu"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. 
          <br></br>
          You can email me at: <a href="mailto:nimsi@berkeley.edu">nimsi@berkeley.edu</a></p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
