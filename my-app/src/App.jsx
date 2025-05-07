import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Create floating bubbles
    const createBubbles = () => {
      const container = document.body;
      const bubbleCount = 15;
      
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Randomize bubble properties
        const size = Math.random() * 80 + 20; // 20-100px
        const left = Math.random() * 100; // 0-100%
        const duration = Math.random() * 10 + 10; // 10-20s
        const delay = Math.random() * 5; // 0-5s
        
        // Apply styles
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;
        
        container.appendChild(bubble);
      }
    };
    
    // Create cats
    const createCats = () => {
      const container = document.body;
      const catPositions = [
        { top: '15%', left: '-80px', delay: 0, direction: 1 },
        { top: '40%', left: '-80px', delay: 3, direction: 1 },
        { top: '65%', left: '-80px', delay: 6, direction: 1 },
        { top: '80%', left: '-80px', delay: 9, direction: 1 }
      ];
      
      catPositions.forEach((position, index) => {
        const cat = document.createElement('div');
        cat.className = 'cat wandering-cat';
        cat.innerHTML = `
          <div class="cat-body"></div>
          <div class="cat-head"></div>
          <div class="cat-ear cat-ear-left"></div>
          <div class="cat-ear cat-ear-right"></div>
          <div class="cat-eye cat-eye-left"></div>
          <div class="cat-eye cat-eye-right"></div>
          <div class="cat-nose"></div>
          <div class="cat-mouth"></div>
          <div class="cat-tail"></div>
          <div class="cat-legs cat-leg-1"></div>
          <div class="cat-legs cat-leg-2"></div>
          <div class="cat-legs cat-leg-3"></div>
          <div class="cat-shadow"></div>
        `;
        
        // Apply unique position and animation delay
        cat.style.top = position.top;
        cat.style.left = position.left;
        cat.style.animationDelay = `${position.delay}s`;
        
        // Change color for variety
        const colors = ['#f97316', '#f59e0b', '#737373', '#fde047'];
        const catColor = colors[index % colors.length];
        
        const catParts = cat.querySelectorAll('.cat-body, .cat-head, .cat-ear, .cat-tail, .cat-legs');
        catParts.forEach(part => {
          part.style.backgroundColor = catColor;
        });
        
        container.appendChild(cat);
      });
    };
    
    createBubbles();
    createCats();
    
    // Cleanup function
    return () => {
      const bubbles = document.querySelectorAll('.bubble');
      bubbles.forEach(bubble => bubble.remove());
      
      const cats = document.querySelectorAll('.wandering-cat');
      cats.forEach(cat => cat.remove());
    };
  }, []);

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