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
            <p>40 rue Laure Diebold</p>
            <p>690009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
            <div className='social-links'>
              <a href='https://github.com/github-john-doe'target='_blank'rel='noopener noreferrer'>
                <i className='bi bi-github'></i>
              </a>
              <a href='https://twitter.com/john-doe'target='_blank'rel='noopener noreferrer'>
                <i className='bi bi-twitter'></i>
              </a>
              <a href='https://linkedin.com/in/john-doe'target='_blank'rel='noopener noreferrer'>
                <i className='bi bi-linkedin'></i>
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div className='col-md-4'>
            <h5>Liens utiles</h5>
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
            <h5>Mes dernières réalisations</h5>
            <ul className='list-unstyled'>
              <li><Link to='/portfolio'>Fresh Food</Link></li>
              <li><Link to='/portfolio'>Restaurant Akira</Link></li>
              <li><Link to='/portfolio'>Espace bien-être</Link></li>
              <li><Link to='/portfolio'>SEO</Link></li>
              <li><Link to='/portfolio'>Création d&apos;un API</Link></li>
              <li><Link to='/portfolio'>Maquette d&apos;un site</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
