import React from 'react';
import Navbar from './Navbar';
import FileList from './FileList';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <main className="dashboard-content">
        <div className="content-header">
          <h1>All files</h1>
          <p className="subtitle">All of your files are displayed here</p>
        </div>
        <div className="files-container">
          <FileList />
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 