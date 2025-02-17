import React from 'react'
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import '../styles/pages/contact.css'

function Contact () {
  return (
    <div className='contact-container container py-5'>
      <h1 className='text-center mb-3'>Contact</h1>
      <div className='text-center mb-5'>
        <p className='subtitle mb-2'>
          Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration, merci de remplir le formulaire de contact.
        </p>
        <div className='section-underline'></div>
      </div>
      <div className='content-box p-4'>
        <div className='row g-4'>
          {/* Form Section */}
          <div className='col-md-6'>
            <div className='section-header'>
              <h2>Formulaire de contact</h2>
            </div>
            <form className='contact-form'>
              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='Nom *'
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='Email *'
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  type='tel'
                  className='form-control'
                  id='phone'
                  placeholder='Téléphone *'
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='subject'
                  placeholder='Sujet *'
                  required
                />
              </div>
              <div className='mb-3'>
                <textarea
                  className='form-control'
                  id='message'
                  rows='5'
                  placeholder='Message *'
                  required
                ></textarea>
              </div>
              <div className='text-center'>
              <button type='submit' className='btn btn-primary btn-submit'>
                Envoyer
              </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className='col-md-6'>
            <div className='section-header'>
              <h2>Mes coordonnées</h2>
            </div>
            <div className='contact-info'>
              <p><FaUser className='me-2' />John DOE</p>
              <p><FaMapMarkerAlt className='me-2' />40 rue Laure Diebold, 69009 Lyon, France</p>
              <p><FaPhone className='me-2' />Téléphone : 10 20 30 40 50</p>
              <p><FaEnvelope className='me-2' />Email : john.doe@gmail.com</p>
              <div className='map-container mt-4'>
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626970664348!2d4.796661776676415!3d45.77866571240045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1708183520419!5m2!1sfr!2sfr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
