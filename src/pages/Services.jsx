import React from 'react'
import '../styles/pages/services.css'

function Services () {
  const services = [
    {
      icon: 'bi bi-code-slash',
      title: 'Développement Frontend',
      description: 'Création d\'interfaces web modernes et responsives avec React.js, HTML5 et CSS3.'
    },
    {
      icon: 'bi bi-server',
      title: 'Développement Backend',
      description: 'Développement d\'APIs RESTful et gestion de bases de données.'
    },
    {
      icon: 'bi bi-phone',
      title: 'Applications Responsive',
      description: 'Sites web adaptatifs fonctionnant sur tous les appareils.'
    },
    {
      icon: 'bi bi-graph-up',
      title: 'SEO',
      description: 'Optimisation pour les moteurs de recherche et performance web.'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Sécurité Web',
      description: 'Implémentation des meilleures pratiques de sécurité web.'
    },
    {
      icon: 'bi bi-clock-history',
      title: 'Maintenance',
      description: 'Support technique et mises à jour régulières de vos applications.'
    }
  ]

  return (
    <div className='services-container container py-5'>
      <h1 className='text-center mb-5'>Mes Services</h1>
      <div className='row g-4'>
        {services.map((service, index) => (
          <div key={index} className='col-md-6 col-lg-4'>
            <div className='card h-100'>
              <div className='card-body text-center'>
                <i className={`${service.icon} fs-1 mb-3 text-primary`} />
                <h3 className='card-title h4'>{service.title}</h3>
                <p className='card-text'>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
