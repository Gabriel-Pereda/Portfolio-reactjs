import React from 'react';
import '../styles/pages/legal.css';
import { Helmet } from 'react-helmet';

function Legal() {
  return (
    <>
    <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
    <div className="legal-container container py-5">
      <h1 className="text-center mb-4">Mentions Légales</h1>
      
      <div className="accordion" id="legalAccordion">
        {/* Éditeur Section */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#editeurCollapse">
              Éditeur du site
            </button>
          </h2>
          <div id="editeurCollapse" className="accordion-collapse collapse show" data-bs-parent="#legalAccordion">
            <div className="accordion-body">
              <p>Ce site est édité par :</p>
              <ul className="list-unstyled">
                <li>John DOE</li>
                <li>123 Rue Example</li>
                <li>75000 Paris</li>
                <li>Téléphone : +33 1 23 45 67 89</li>
                <li>Email : contact@johndoe.fr</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hébergeur Section */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hebergeurCollapse">
              Hébergeur du site
            </button>
          </h2>
          <div id="hebergeurCollapse" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
            <div className="accordion-body">
              <p>Ce site est hébergé par :</p>
              <ul className="list-unstyled">
                <li>OVHcloud</li>
                <li>2 rue Kellermann</li>
                <li>59100 Roubaix</li>
                <li>France</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Crédits Section */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#creditsCollapse">
              Crédits
            </button>
          </h2>
          <div id="creditsCollapse" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li>Images : <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a></li>
                <li>Favicon : <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener noreferrer">Flaticon</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Legal;