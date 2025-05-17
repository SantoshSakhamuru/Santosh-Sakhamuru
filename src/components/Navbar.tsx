import React, { useState } from 'react';
import './Navbar.css';
import UploadModal from './UploadModal/UploadModal';

const Navbar: React.FC = () => {
  const username = "Robert Fox"; // This could come from your auth system
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search files..." 
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
        <div className="navbar-right">
          <button 
            className="upload-button"
            onClick={() => setIsUploadModalOpen(true)}
          >
            <span className="button-icon">⬆️</span>
            Upload file
          </button>
          <button className="create-button">
            <span className="button-icon">✓</span>
            Verify
          </button>
          <div className="user-greeting">
            Hello, {username}
          </div>
        </div>
      </nav>
      <UploadModal 
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </>
  );
};

export default Navbar; 