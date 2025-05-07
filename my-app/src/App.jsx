import React, { useEffect } from 'react';
import './App.css';
import catGif from './assets/cat.gif';  // Import the gif
import sound from './assets/sound.mp3';  // Import the sound file

function App() {
  useEffect(() => {
    // Create an audio element and play the sound
    const audio = new Audio(sound);
    audio.loop = true;
    audio.play();

    // Cleanup function to stop the sound when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="app-container">
      <div className="card">
        <img src={catGif} alt="Cat" className="cat-gif" /> {/* Add the gif */}
        <h1>🚀 Assignment 5</h1>
        <p className="subtitle">
          Firebase Auto Deployment with Jenkins Pipeline
        </p>
        <div className="submitted">
          <p className="label">Submitted by:</p>
          <p>Apichit Lakorn — B6512767</p>
          <p>Kamonchanok Thonnondang — B6526405</p>
        </div>
      </div>
    </div>
  );
}

export default App;
