import React from 'react';

// Custom icon components using SVG
const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
  </svg>
);

const GitBranchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="6" y2="15"></line>
    <circle cx="18" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <path d="M18 9a9 9 0 0 1-9 9"></path>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <div className="flex items-center">
            <GitBranchIcon />
            <p className="text-sm font-medium ml-2">CS4982 - DevOps</p>
          </div>
          <h1 className="text-3xl font-bold mt-2">Assignment 5</h1>
          <p className="text-lg mt-1 font-medium">
            Auto Deployment with Jenkins
          </p>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <div className="flex items-center mb-3">
              <GraduationCapIcon />
              <p className="text-gray-600 font-medium ml-2">Member</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-800 font-medium">Apichit Lakorn — B65127667</p>
              <p className="text-gray-800 font-medium mt-2">Tanarat Witantiwong — B6509644</p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <div className="text-xs text-gray-500">
              <p>Submission Date: May 7, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}