import React, { useState } from 'react'
import GitHubModal from '../components/GitHubModal'
import '../styles/pages/home.css'
import heroBg from '../assets/images/hero-bg.jpg'

function Home () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='home'>
      {/* Hero Section */}
      <section
        className='hero'
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className='hero-content'>
          <h1>John DOE</h1>
          <h2>Développeur Web Full Stack</h2>
          <button
            className='btn btn-primary btn-lg'
            onClick={() => setIsModalOpen(true)}
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className='main-content py-5'>
        <div className='container'>
          <div className='row'>
            {/* About Column */}
            <div className='col-md-6 mb-4 mb-md-0'>
              <h2 className='mb-4'>À propos</h2>
              <div className='about-content'>
                <p>
                  Passionné par le développement web, je suis un développeur Full Stack
                  spécialisé dans la création d&apos;applications web modernes et
                  performantes. Avec une solide formation au CEF, je maîtrise aussi
                  bien les technologies frontend que backend.
                </p>
                <p>
                  Mon approche méthodique et ma capacité à résoudre les problèmes
                  me permettent de créer des solutions web efficaces et innovantes.
                  Je suis constamment en veille technologique pour rester à la pointe
                  des dernières évolutions du secteur.
                </p>
              </div>
            </div>

            {/* Skills Column */}
            <div className='col-md-6'>
              <h2 className='mb-4'>Compétences</h2>
              <div className='skills-list'>
                <div className='skill-item'>
                  <div className='d-flex justify-content-between mb-1'>
                    <span>HTML 5</span>
                    <span>90%</span>
                  </div>
                  <div className='progress'>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>

                <div className='skill-item'>
                  <div className='d-flex justify-content-between mb-1'>
                    <span>CSS 3</span>
                    <span>80%</span>
                  </div>
                  <div className='progress'>
                    <div
                      className='progress-bar bg-info'
                      role='progressbar'
                      style={{ width: '80%' }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>

                <div className='skill-item'>
                  <div className='d-flex justify-content-between mb-1'>
                    <span>JavaScript</span>
                    <span>70%</span>
                  </div>
                  <div className='progress'>
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{ width: '70%' }}
                      aria-valuenow='70'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>

                <div className='skill-item'>
                  <div className='d-flex justify-content-between mb-1'>
                    <span>PHP</span>
                    <span>60%</span>
                  </div>
                  <div className='progress'>
                    <div
                      className='progress-bar bg-success'
                      role='progressbar'
                      style={{ width: '60%' }}
                      aria-valuenow='60'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>

                <div className='skill-item'>
                  <div className='d-flex justify-content-between mb-1'>
                    <span>React</span>
                    <span>50%</span>
                  </div>
                  <div className='progress'>
                    <div
                      className='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '50%' }}
                      aria-valuenow='50'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GitHubModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
export default Home

