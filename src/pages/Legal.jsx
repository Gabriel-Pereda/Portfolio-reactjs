import React from 'react'
import { Helmet } from 'react-helmet'
import { FaGlobe, FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaMap } from 'react-icons/fa'
import '../styles/pages/legal.css'

function Legal () {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container py-5">
        <h1 className="mb-4">Mentions Légales</h1>
        <div className="accordion legal-content" id="legalAccordion">
          {/* Éditeur */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
                <p><FaUser className="me-2" />John DOE</p>
                <p><FaMap className="me-2" />40 rue Laure Diebold</p>
                <p><FaMapMarkerAlt className="me-2" />69009 Lyon, France</p>
                <p><FaPhone className="me-2" />Téléphone : 10 20 30 40 50</p>
                <p><FaEnvelope className="me-2" />Email : john.doe@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Hébergeur */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Hébergeur du site
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
                <h2><strong>alwaysdata</strong></h2>
                <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <p>
                  <FaGlobe className="me-2" />
                  <a
                    href="https://www.alwaysdata.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Crédits */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
                <h2><strong>Crédits</strong></h2>
                <p className="credits-text">
                  Ce site a été réalisé par John Doe, étudiant au{' '}
                  <a
                    href="https://www.centre-europeen-formation.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Centre Européen de Formation
                  </a>
                </p>
                <br />
                <p className="credits-text fst-italic">
                  Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{' '}
                  <a
                    href="https://pixabay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pixabay
                  </a>
                </p>
                <br />
                <p className="credits-text fst-italic">
                  Le favicon de ce site a été fourni par{' '}
                  <a
                    href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    John doe Icons erstellt von Freepik - Flaticon
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Legal
