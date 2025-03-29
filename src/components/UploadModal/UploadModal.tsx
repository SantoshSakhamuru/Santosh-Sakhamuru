import React, { useRef } from 'react';
import './UploadModal.css';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log('Dropped files:', files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log('Selected files:', files);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Upload file</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p className="upload-text">Add your files or documents here</p>
          <div 
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="drop-zone-content">
              <div className="upload-icon">⬆️</div>
              <p>Drop your files here, <button className="browse-button" onClick={handleBrowseClick}>or click to browse</button></p>
              <input
                ref={fileInputRef}
                type="file"
                className="file-input"
                onChange={handleFileSelect}
                multiple
              />
            </div>
          </div>
          <div className="file-info">
            <small>Supported files: docx, png, webp, cvs, txt, zip</small>
            <small>Maximum size: 10MB</small>
          </div>
        </div>
        <div className="modal-footer">
          <button className="continue-button" disabled>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal; 