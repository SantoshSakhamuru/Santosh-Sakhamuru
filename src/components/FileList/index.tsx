import React, { useState } from 'react';
import { FileItem } from '../../types/file';
import FileListHeader from './FileListHeader';
import FileRow from './FileRow';
import './FileList.css';

// Mock data
const mockFiles: FileItem[] = [
  { id: '1', name: 'Campaign Analysis - Q3.docx', type: 'document', size: '2.7 MB', modifiedDate: 'Apr 14, 2024' },
  { id: '2', name: 'rebrand_mockup_v2_20241025.jpg', type: 'image', size: '6.7 MB', modifiedDate: 'Apr 14, 2024' },
  { id: '3', name: 'proposal_new_product_idea.docx', type: 'document', size: '1.5 MB', modifiedDate: 'Apr 13, 2024' },
  { id: '4', name: 'landscape_002.jpg', type: 'image', size: '8.4 MB', modifiedDate: 'Apr 13, 2024' },
  { id: '5', name: 'sunset_bench_20241025.jpg', type: 'image', size: '7.3 MB', modifiedDate: 'Apr 11, 2024' },
  { id: '6', name: 'social_media_report_20241025.docx', type: 'document', size: '2.3 MB', modifiedDate: 'Apr 10, 2024' },
  { id: '7', name: 'HR_meeting_notes_20241025.docx', type: 'document', size: '3.1 MB', modifiedDate: 'Apr 10, 2024' },
  { id: '8', name: 'interview_downtown_20241025.mp4', type: 'video', size: '15.2 MB', modifiedDate: 'Apr 10, 2024' },
  { id: '9', name: 'project_files_backup_2024-11-05.zip', type: 'zip', size: '21.6 MB', modifiedDate: 'Apr 09, 2024' },
  { id: '10', name: 'landscape_003.jpg', type: 'image', size: '3.6 MB', modifiedDate: 'Apr 09, 2024' }
];

const FileList: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());

  const handleSelectAll = () => {
    if (selectedFiles.size === mockFiles.length) {
      setSelectedFiles(new Set());
    } else {
      setSelectedFiles(new Set(mockFiles.map(f => f.id)));
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

  const handleActionClick = (id: string) => {
    console.log('Action clicked for file:', id);
  };

  return (
    <div className="file-list">
      <FileListHeader
        onSelectAll={handleSelectAll}
        isAllSelected={selectedFiles.size === mockFiles.length}
      />
      <div className="file-list-body">
        {mockFiles.map((file) => (
          <FileRow
            key={file.id}
            file={file}
            isSelected={selectedFiles.has(file.id)}
            onSelect={handleSelectFile}
            onActionClick={handleActionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FileList; 