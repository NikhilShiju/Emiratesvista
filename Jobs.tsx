import React from 'react';
import JobCard from '../components/JobCard';
import { initialJobs } from '../data';

export default function Jobs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Available Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initialJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}