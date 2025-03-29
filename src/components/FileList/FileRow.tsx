import React from 'react';
import { FileItem } from '../../types/file';
import FileIcon from './FileIcon';
import './FileRow.css';

interface FileRowProps {
  file: FileItem;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onActionClick: (id: string) => void;
}

const FileRow: React.FC<FileRowProps> = ({
  file,
  isSelected,
  onSelect,
  onActionClick,
}) => {
  return (
    <div className="file-row">
      <div className="cell checkbox-cell">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(file.id)}
        />
      </div>
      <div className="cell name-cell">
        <FileIcon type={file.type} />
        <span className="file-name">{file.name}</span>
      </div>
      <div className="cell size-cell">{file.size}</div>
      <div className="cell date-cell">{file.modifiedDate}</div>
      <div className="cell actions-cell">
        <button 
          className="action-button"
          onClick={() => onActionClick(file.id)}
        >
          ⋮
        </button>
      </div>
    </div>
  );
};

export default FileRow; 