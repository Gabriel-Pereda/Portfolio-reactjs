import React from 'react';
import '../styles/pages/contact.css';

function Contact() {
  return (
    <div className="contact-container container py-5">
      <h1 className="text-center mb-5">Contact</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            {/* Add more form fields */}
          </form>
        </div>
        <div className="col-md-6">
          <div className="contact-info">
            {/* Add contact info and Google Maps */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;