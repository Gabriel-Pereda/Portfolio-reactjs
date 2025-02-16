import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/footer.css'

function Footer () {
  return (
    <footer className='footer bg-dark text-light py-5'>
      <div className='container'>
        <div className='row'>
          {/* Contact Info */}
          <div className='col-md-4'>
            <h5>John DOE</h5>
            <p>123 Rue Example<br/>75000 Paris</p>
            <p>+33 1 23 45 67 89</p>
            <div className='social-links'>
              <a 
                href='https://github.com/github-john-doe'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='bi bi-github'></i>
              </a>
              <a 
                href='https://twitter.com/john-doe'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='bi bi-twitter'></i>
              </a>
              <a 
                href='https://linkedin.com/in/john-doe'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='bi bi-linkedin'></i>
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div className='col-md-4'>
            <h5>Navigation</h5>
            <ul className='list-unstyled'>
              <li><Link to='/'>Accueil</Link></li>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/legal'>Mentions légales</Link></li>
            </ul>
          </div>
          {/* Recent Projects */}
          <div className='col-md-4'>
            <h5>Dernières Réalisations</h5>
            <ul className='list-unstyled'>
              <li><Link to='/portfolio'>Projet 1</Link></li>
              <li><Link to='/portfolio'>Projet 2</Link></li>
              <li><Link to='/portfolio'>Projet 3</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
