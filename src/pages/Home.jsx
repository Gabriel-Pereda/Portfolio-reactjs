import React, { useState } from 'react';
import GitHubModal from '../components/GitHubModal';
import '../styles/pages/home.css';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="overlay">
          <h1>John DOE</h1>
          <h2>Développeur Web Full Stack</h2>
          <button 
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            En savoir plus
          </button>
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