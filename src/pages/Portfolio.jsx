import React from 'react'
import '../styles/pages/portfolio.css'

function Portfolio () {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'Site e-commerce développé avec React et Node.js, intégrant Stripe pour les paiements.',
      image: '/assets/images/projects/ecommerce.jpg',
      link: 'https://github.com/username/ecommerce'
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'Application de gestion de tâches avec React et Firebase.',
      image: '/assets/images/projects/taskmanager.jpg',
      link: 'https://github.com/username/taskmanager'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Application météo utilisant l\'API OpenWeather.',
      image: '/assets/images/projects/weather.jpg',
      link: 'https://github.com/username/weather-app'
    },
    {
      id: 4,
      title: 'Portfolio',
      description: 'Portfolio personnel développé avec React et Bootstrap.',
      image: '/assets/images/projects/portfolio.jpg',
      link: 'https://github.com/username/portfolio'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Plateforme de blog avec système de gestion de contenu.',
      image: '/assets/images/projects/blog.jpg',
      link: 'https://github.com/username/blog'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Application de chat en temps réel avec Socket.io.',
      image: '/assets/images/projects/chat.jpg',
      link: 'https://github.com/username/chat-app'
    }
  ]

  return (
    <div className='portfolio-container container py-5'>
      <h1 className='text-center mb-5'>Mon Portfolio</h1>
      <div className='row g-4'>
        {projects.map(project => (
          <div key={project.id} className='col-md-4'>
            <div className='card h-100'>
              <img src={project.image} className='card-img-top' alt={project.title} />
              <div className='card-body'>
                <h3 className='card-title h5'>{project.title}</h3>
                <p className='card-text'>{project.description}</p>
                <a href={project.link} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
