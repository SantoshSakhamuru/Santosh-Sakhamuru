import React from 'react';
import { FileType } from '../../types/file';
import './FileIcon.css';

interface FileIconProps {
  type: FileType;
}

const FileIcon: React.FC<FileIconProps> = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case 'document':
        return '📄';
      case 'image':
        return '🖼️';
      case 'video':
        return '🎥';
      case 'audio':
        return '🎵';
      case 'zip':
        return '📦';
      default:
        return '📄';
    }
  };

  return (
    <span className="file-icon">
      {getIcon()}
    </span>
  );
};

export default FileIcon; 