import React, { useEffect, useState } from 'react';
import '../styles/components/github-modal.css';
import GitHubModal from '../components/GitHubModal';  // Update the correct path
import '../styles/pages/home.css';


function GitHubModal({ isOpen, onClose }) {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    if (isOpen && !githubData) {
      fetch('https://api.github.com/users/github-john-doe')
        .then(response => response.json())
        .then(data => setGithubData(data))
        .catch(error => console.error('Error fetching GitHub data:', error));
    }
  }, [isOpen, githubData]);

  if (!isOpen) return null;

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Profil GitHub</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {githubData ? (
              <div>
                <img src={githubData.avatar_url} alt="GitHub Avatar" className="github-avatar" />
                <h3>{githubData.name}</h3>
                <p>{githubData.bio}</p>
                <p>Repositories publics: {githubData.public_repos}</p>
                <p>Followers: {githubData.followers}</p>
              </div>
            ) : (
              <p>Chargement...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubModal;