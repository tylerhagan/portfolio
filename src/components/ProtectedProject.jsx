import { useState, useEffect } from 'react';
import './ProtectedProject.css';

const ProtectedProject = ({ projectId, children, onNavigate }) => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  // Set your password here
  const PROTECTED_PASSWORD = 'unlockProject'; // Change this to your desired password
  
  // Create a unique storage key for this project
  const STORAGE_KEY = `project_access_${projectId}`;

  // Check localStorage on component mount
  useEffect(() => {
    const storedAccess = localStorage.getItem(STORAGE_KEY);
    if (storedAccess === 'granted') {
      setIsUnlocked(true);
    }
  }, [STORAGE_KEY]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === PROTECTED_PASSWORD) {
      setIsUnlocked(true);
      setError(false);
      // Store access in localStorage
      localStorage.setItem(STORAGE_KEY, 'granted');
    } else {
      setError(true);
      setPassword('');
      // Shake animation trigger
      setTimeout(() => setError(false), 500);
    }
  };

  if (isUnlocked) {
    return children;
  }

  return (
    <div className="protected-project">
      <div className="protected-container">
        <div className="protected-content">
          <div className="lock-icon">🔒</div>
          <h1>Protected Project</h1>
          <p className="protected-subtitle">
            This project contains confidential work. Please enter the password to view.
          </p>
          
          <form onSubmit={handleSubmit} className={`password-form ${error ? 'shake' : ''}`}>
            <div className="input-wrapper">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={`password-input ${error ? 'error' : ''}`}
                autoFocus
              />
              {error && <span className="error-message">Incorrect password</span>}
            </div>
            <button type="submit" className="btn btn-primary">
              Unlock Project
            </button>
          </form>

          <button 
            className="btn btn-secondary back-button" 
            onClick={() => onNavigate('home')}
          >
            ← Back to Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProtectedProject;
