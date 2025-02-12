import React from 'react';
import '../styles/pages/portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-container container py-5">
      <h1 className="text-center mb-5">Mon Portfolio</h1>
      <div className="row g-4">
        {/* Add 6+ project cards */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src="/path-to-project-image.jpg" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h3 className="card-title">Projet 1</h3>
              <p className="card-text">Description du projet...</p>
              <a href="#" className="btn btn-primary">Voir plus</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;