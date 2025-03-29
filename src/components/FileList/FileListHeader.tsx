import React from 'react';
import './FileListHeader.css';

interface FileListHeaderProps {
  onSelectAll: () => void;
  isAllSelected: boolean;
}

const FileListHeader: React.FC<FileListHeaderProps> = ({ onSelectAll, isAllSelected }) => {
  return (
    <div className="file-list-header">
      <div className="header-cell checkbox-cell">
        <input
          type="checkbox"
          onChange={onSelectAll}
          checked={isAllSelected}
        />
      </div>
      <div className="header-cell name-cell">Name</div>
      <div className="header-cell size-cell">File Size</div>
      <div className="header-cell date-cell">Date modified</div>
      <div className="header-cell actions-cell"></div>
    </div>
  );
};

export default FileListHeader; 