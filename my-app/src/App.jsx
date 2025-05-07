import React from 'react';
import { GraduationCap, GitBranch } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <div className="flex items-center">
            <GitBranch className="mr-2" />
            <p className="text-sm font-medium">CS4982 - DevOps</p>
          </div>
          <h1 className="text-3xl font-bold mt-2">Assignment 5</h1>
          <p className="text-lg mt-1 font-medium">
            Auto Deployment with Jenkins
          </p>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <div className="flex items-center mb-3">
              <GraduationCap className="text-blue-600 mr-2" />
              <p className="text-gray-600 font-medium">Submitted by:</p>
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