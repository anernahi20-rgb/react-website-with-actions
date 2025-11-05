import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 React.js Website with GitHub Actions</h1>
        <p className="subtitle">Automated Build & Deployment Demo</p>
        
        <div className="time-display">
          <h2>⏰ Current Time</h2>
          <p className="time">{currentTime.toLocaleString()}</p>
        </div>

        <div className="counter-section">
          <h2>🔢 Interactive Counter</h2>
          <div className="counter-display">
            <span className="counter-value">{counter}</span>
          </div>
          <div className="counter-buttons">
            <button onClick={handleDecrement} className="btn btn-danger">-</button>
            <button onClick={handleReset} className="btn btn-secondary">Reset</button>
            <button onClick={handleIncrement} className="btn btn-success">+</button>
          </div>
        </div>

        <div className="features-section">
          <h2>✨ Features</h2>
          <ul className="features-list">
            <li>⚛️ Built with React.js</li>
            <li>🤖 Automated deployment with GitHub Actions</li>
            <li>🌐 Hosted on GitHub Pages</li>
            <li>📱 Responsive design</li>
            <li>🎨 Modern UI with CSS animations</li>
          </ul>
        </div>

        <div className="links-section">
          <h2>🔗 Links</h2>
          <div className="links">
            <a 
              href="https://github.com/anernahi20-rgb/react-website-with-actions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-btn"
            >
              📂 View Source Code
            </a>
            <a 
              href="https://reactjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-btn"
            >
              📚 Learn React
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;