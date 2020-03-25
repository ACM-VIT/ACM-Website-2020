import React from 'react';
import PropTypes from 'prop-types';

import ContactCard from './ContactCard.component';

const Contact = ({ findOffset }) => {
  return (
    <section
      ref={el => {
        if (!el) return;
        findOffset(el.getBoundingClientRect().y - 180);
      }}
      className="mb-32"
      id="contact-section"
    >
      <ContactCard />
    </section>
  );
};

Contact.propTypes = { findOffset: PropTypes.func.isRequired };

export default Contact;
