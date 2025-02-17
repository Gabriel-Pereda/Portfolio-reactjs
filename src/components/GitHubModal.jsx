import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  FaUser,
  FaMapMarkerAlt,
  FaFileAlt,
  FaCube,
  FaUsers
} from 'react-icons/fa'
import '../styles/components/github-modal.css'

function GitHubModal ({ isOpen, onClose }) {
  const [githubData, setGithubData] = useState(null)

  useEffect(() => {
    if (isOpen && !githubData) {
      fetch('https://api.github.com/users/github-john-doe')
        .then(response => response.json())
        .then(data => setGithubData(data))
        .catch(error => console.error('Error fetching GitHub data:', error))
    }
  }, [isOpen, githubData])

  if (!isOpen) return null

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header border-secondary">
            <h5 className="modal-title">Profil GitHub</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} />
          </div>
          <div className="modal-body">
            {githubData
              ? (
                <div className="github-profile">
                  <div className="row align-items-center">
                    <div className="col-md-5 text-center">
                      <img
                        src={githubData.avatar_url}
                        alt="GitHub Avatar"
                        className="github-avatar img-fluid rounded mb-3 mb-md-0"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="github-info">
                        <h3 className="mb-3">
                          <FaUser className="me-2" />
                          {githubData.name || 'John Doe'}
                        </h3>
                        <p className="mb-2">
                          <FaMapMarkerAlt className="me-2" />
                          Non renseigné
                        </p>
                        <p className="mb-4">
                          <FaFileAlt className="me-2" />
                          {githubData.bio || 'Développeur web full stack passionné'}
                        </p>
                        <div className="github-stats">
                          <div className="stat-item">
                            <FaCube className="me-2" />
                            <span>{githubData.public_repos} repositories</span>
                          </div>
                          <div className="stat-item">
                            <FaUsers className="me-2" />
                            <span>{githubData.followers} followers</span>
                          </div>
                          <div className="stat-item">
                            <FaUsers className="me-2" />
                            <span>{githubData.following} following</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )
              : (
                <div className="text-center py-4">
                  <p>Chargement...</p>
                </div>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}

GitHubModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default GitHubModal
