import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80")'
      }}
    >
      <div className="relative min-h-screen bg-gradient-to-b from-black/50 via-transparent to-black/50">
        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Your Gateway to Gulf Opportunities
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Emirates Vista connects talented professionals from India with prestigious job opportunities across the Gulf region.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <Link
                  to="/jobs"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  View Jobs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-blue-900">Verified Jobs</h3>
                  <p className="mt-2 text-gray-700">All positions are pre-screened and verified for your security</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-blue-900">Full Support</h3>
                  <p className="mt-2 text-gray-700">Complete visa and travel assistance provided</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-blue-900">Direct Hiring</h3>
                  <p className="mt-2 text-gray-700">Direct placement with reputable Gulf companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}