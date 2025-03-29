import React, { useState } from 'react';
import './AuditorDashboard.css';

interface AuditFile {
  id: string;
  name: string;
  type: string;
  size: string;
  modifiedDate: string;
  status: 'pending' | 'verified' | 'challenged';
}

const AuditorDashboard: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [showProofModal, setShowProofModal] = useState(false);

  // Mock data for audit files
  const auditFiles: AuditFile[] = [
    { id: '1', name: 'Campaign Analysis - Q3.docx', type: 'document', size: '2.7 MB', modifiedDate: 'Apr 14, 2024', status: 'pending' },
    { id: '2', name: 'rebrand_mockup_v2_20241025.jpg', type: 'image', size: '6.7 MB', modifiedDate: 'Apr 14, 2024', status: 'verified' },
    { id: '3', name: 'proposal_new_product_idea.docx', type: 'document', size: '1.5 MB', modifiedDate: 'Apr 13, 2024', status: 'challenged' },
    { id: '4', name: 'landscape_002.jpg', type: 'image', size: '8.4 MB', modifiedDate: 'Apr 13, 2024', status: 'pending' },
    { id: '5', name: 'sunset_bench_20241025.jpg', type: 'image', size: '7.3 MB', modifiedDate: 'Apr 11, 2024', status: 'verified' },
  ];

  const handleSelectAll = () => {
    if (selectedFiles.size === auditFiles.length) {
      setSelectedFiles(new Set());
    } else {
      setSelectedFiles(new Set(auditFiles.map(f => f.id)));
    }
  };

  const handleSelectFile = (id: string) => {
    const newSelection = new Set(selectedFiles);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedFiles(newSelection);
  };

  const getStatusColor = (status: AuditFile['status']) => {
    switch (status) {
      case 'verified':
        return '#10B981'; // green
      case 'challenged':
        return '#EF4444'; // red
      default:
        return '#6B7280'; // gray
    }
  };

  return (
    <div className="auditor-dashboard">
      <div className="auditor-header">
        <div className="header-content">
          <h1>Auditor Dashboard</h1>
          <p>Review and verify files</p>
        </div>
        <div className="header-actions">
          <button 
            className="challenge-button"
            onClick={() => setShowChallengeModal(true)}
            disabled={selectedFiles.size === 0}
          >
            <span className="button-icon">⚠️</span>
            Challenge Files
          </button>
          <button 
            className="generate-proof-button"
            onClick={() => setShowProofModal(true)}
            disabled={selectedFiles.size === 0}
          >
            <span className="button-icon">🔒</span>
            Generate Proof
          </button>
        </div>
      </div>

      <div className="audit-files-container">
        <div className="files-header">
          <div className="header-cell checkbox-cell">
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={selectedFiles.size === auditFiles.length}
            />
          </div>
          <div className="header-cell name-cell">Name</div>
          <div className="header-cell size-cell">Size</div>
          <div className="header-cell date-cell">Modified</div>
          <div className="header-cell status-cell">Status</div>
        </div>

        <div className="files-body">
          {auditFiles.map((file) => (
            <div key={file.id} className="file-row">
              <div className="cell checkbox-cell">
                <input
                  type="checkbox"
                  checked={selectedFiles.has(file.id)}
                  onChange={() => handleSelectFile(file.id)}
                />
              </div>
              <div className="cell name-cell">
                <span className="file-icon">📄</span>
                {file.name}
              </div>
              <div className="cell size-cell">{file.size}</div>
              <div className="cell date-cell">{file.modifiedDate}</div>
              <div className="cell status-cell">
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(file.status) }}
                >
                  {file.status.charAt(0).toUpperCase() + file.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge Modal */}
      {showChallengeModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Challenge Files</h2>
              <button className="close-button" onClick={() => setShowChallengeModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to challenge the selected files?</p>
              <div className="modal-actions">
                <button className="cancel-button" onClick={() => setShowChallengeModal(false)}>
                  Cancel
                </button>
                <button className="confirm-button">
                  Confirm Challenge
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Generate Proof Modal */}
      {showProofModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Generate Proof</h2>
              <button className="close-button" onClick={() => setShowProofModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p>Generating proof for selected files...</p>
              <div className="modal-actions">
                <button className="cancel-button" onClick={() => setShowProofModal(false)}>
                  Cancel
                </button>
                <button className="confirm-button">
                  Download Proof
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditorDashboard; 