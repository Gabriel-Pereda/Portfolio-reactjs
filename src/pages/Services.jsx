import React from 'react'
import '../styles/pages/services.css'

function Services () {
  const services = [
    {
      icon: 'bi bi-pencil-square',
      title: 'UX Design',
      description: 'L\'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l\'utilisateur au centre des préoccupations. L\'objectif est de rendre l\'expérience utilisateur la plus fluide et agréable possible.'
    },
    {
      icon: 'bi bi-code-slash',
      title: 'Développement web',
      description: 'Le développement de site web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).'
    },
    {
      icon: 'bi bi-search',
      title: 'Référencement',
      description: 'Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L\'objectif est d\'attirer un maximum de visiteurs qualifié sur le site.'
    }
  ]

  return (
    <>
      <div className='hero'>
        <div className='hero-overlay'></div>
      </div>
      <div className='services-container container py-5'>
        <h1 className='text-center mb-3'>Mon offre de services</h1>
        <div className='text-center mb-5'>
          <p className='subtitle mb-2'>
            Voici les prestations sur lesquelles je peux intervenir
          </p>
          <div className='section-underline'></div>
        </div>
        <div className='row g-4'>
          {services.map((service, index) => (
            <div key={index} className='col-md-4'>
              <div className='card h-100'>
                <div className='card-body text-center'>
                  <i className={`${service.icon} fs-1 mb-3 text-primary`}/>
                  <h3 className='card-title h4'>{service.title}</h3>
                  <p className='card-text'>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services
