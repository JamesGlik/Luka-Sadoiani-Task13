import React from 'react';
import Button from './Button';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="profile-card">
        <div className="profile-upper">
          <div className="profile-image"></div>
          <h2 className="profile-name">Jessica Randall</h2>
          <p className="profile-location">London, United Kingdom</p>
          <p className="profile-description">"Front-end developer and avid reader."</p>
        </div>
        <div className="button-group">
          <Button label="GitHub" />
          <Button label="Frontend Mentor" />
          <Button label="LinkedIn" />
          <Button label="Twitter" />
          <Button label="Instagram" />
        </div>
      </div>
    </div>
  );
}

export default App;
