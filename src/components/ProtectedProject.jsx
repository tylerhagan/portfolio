import { useState } from 'react';
import './ProtectedProject.css';

const ProtectedProject = ({ projectId, children, onNavigate }) => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  // Set your password here
  const PROTECTED_PASSWORD = 'unlockProject';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === PROTECTED_PASSWORD) {
      setIsUnlocked(true);
      setError(false);
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
