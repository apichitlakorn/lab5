import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <div className="card-header">
          <div className="course-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="6" y1="3" x2="6" y2="15"></line>
              <circle cx="18" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M18 9a9 9 0 0 1-9 9"></path>
            </svg>
            <p>CS4982 - DevOps</p>
          </div>
          <h1>Assignment 5</h1>
          <p className="subtitle">Auto Deployment with Jenkins</p>
        </div>
        
        <div className="card-body">
          <div className="submitted-section">
            <div className="submitted-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
              <p>Submitted by:</p>
            </div>
            <div className="submitted-content">
              <p>Apichit Lakorn — B65127667</p>
              <p>Tanarat Witantiwong — B6509644</p>
            </div>
          </div>
          
          <div className="submission-date">
            <p>Submission Date: May 7, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;