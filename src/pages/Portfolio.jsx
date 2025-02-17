import React from 'react'
import '../styles/pages/portfolio.css'
import freshFoodImg from '../assets/images/portfolio/fresh-food.jpg'
import restaurantJaponaisImg from '../assets/images/portfolio/restaurant-japonais.jpg'
import espaceBienEtreImg from '../assets/images/portfolio/espace-bien-etre.jpg'
import seoImg from '../assets/images/portfolio/seo.jpg'
import apiImg from '../assets/images/portfolio/coder.jpg'
import maquetteImg from '../assets/images/portfolio/screens.jpg'

function Portfolio () {
  const projects = [
    {
      id: 1,
      title: 'Fresh Food',
      description: 'Site de vente de produits frais en lignes',
      image: freshFoodImg,
      link: '#',
      languages: ['Site réalisé avec PHP et MySQL']
    },
    {
      id: 2,
      title: 'Restaurant Akira',
      description: 'Site de vente de produits frais en lignes',
      image: restaurantJaponaisImg,
      link: '#',
      languages: ['Site réalisé avec WordPress']
    },
    {
      id: 3,
      title: 'Espace bien-être',
      description: 'Site de vente de produits frais en lignes',
      image: espaceBienEtreImg,
      link: '#',
      languages: ['Site réalisé avec LARAVEL']
    },
    {
      id: 4,
      title: 'SEO',
      description: 'Amélioration du référencement d\'un site e-commerce',
      image: seoImg,
      link: '#',
      languages: ['Utilisation des outils SEO']
    },
    {
      id: 5,
      title: 'Création d\'un API',
      description: 'Création d\'une API pour un site e-commerce',
      image: apiImg,
      link: '#',
      languages: ['PHP - SYMFONY']
    },
    {
      id: 6,
      title: 'Maquette d\'un site',
      description: 'Création du prototype d\'un site',
      image: maquetteImg,
      link: '#',
      languages: ['Réalisé avec FIGMA']
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
                <a href={project.link} className='btn btn-primary mb-3' target='_blank' rel='noopener noreferrer'>
                  Voir le projet
                </a>
                <div className='languages-container'>
                  {project.languages.join(' • ')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
