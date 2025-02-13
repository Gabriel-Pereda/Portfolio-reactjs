import React, { useState } from 'react';
import GitHubModal from '../components/GitHubModal';
import '../styles/pages/home.css';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>John DOE</h1>
          <h2>Développeur Web Full Stack</h2>
          <button 
            className="btn btn-primary btn-lg"
            onClick={() => setIsModalOpen(true)}
          >
            En savoir plus
          </button>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2 className="text-center mb-5">À propos</h2>
          {/* Add about content */}
        </div>
      </section>

      <GitHubModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Home;