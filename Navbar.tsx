import React from 'react';
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-900">Emirates Vista</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-blue-900 hover:text-blue-700">Home</Link>
            <Link to="/jobs" className="text-blue-900 hover:text-blue-700">Jobs</Link>
            <Link to="/admin" className="text-blue-900 hover:text-blue-700">Admin</Link>
            <a 
              href="https://instagram.com/emirates_vista" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-blue-700"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}