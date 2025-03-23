import React from 'react';
import { Calendar, MapPin, DollarSign } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-blue-900">{job.title}</h3>
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="h-5 w-5 mr-2" />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="h-5 w-5 mr-2" />
          <span>{job.postedDate}</span>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{job.description}</p>
      <div className="mt-4">
        <h4 className="font-medium text-blue-900">Requirements:</h4>
        <ul className="mt-2 list-disc list-inside text-gray-700">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}