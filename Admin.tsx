import React, { useState } from 'react';
import { ADMIN_CREDENTIALS, initialJobs } from '../data';
import { Job } from '../types';
import { Plus, Save, Trash } from 'lucide-react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleAddJob = () => {
    const newJob: Job = {
      id: String(Date.now()),
      title: '',
      location: '',
      salary: '',
      description: '',
      requirements: [''],
      postedDate: new Date().toISOString().split('T')[0]
    };
    setJobs([...jobs, newJob]);
  };

  const handleUpdateJob = (index: number, field: keyof Job, value: string | string[]) => {
    const updatedJobs = [...jobs];
    if (field === 'requirements' && typeof value === 'string') {
      updatedJobs[index][field] = value.split(',').map(req => req.trim());
    } else {
      updatedJobs[index][field] = value as any;
    }
    setJobs(updatedJobs);
  };

  const handleDeleteJob = (index: number) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24">
        <div className="max-w-md mx-auto px-4">
          <form onSubmit={handleLogin} className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Admin Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Manage Jobs</h2>
          <button
            onClick={handleAddJob}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Job
          </button>
        </div>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={job.id} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={job.title}
                    onChange={(e) => handleUpdateJob(index, 'title', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={job.location}
                    onChange={(e) => handleUpdateJob(index, 'location', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Salary</label>
                  <input
                    type="text"
                    value={job.salary}
                    onChange={(e) => handleUpdateJob(index, 'salary', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Posted Date</label>
                  <input
                    type="date"
                    value={job.postedDate}
                    onChange={(e) => handleUpdateJob(index, 'postedDate', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Description</label>
                  <textarea
                    value={job.description}
                    onChange={(e) => handleUpdateJob(index, 'description', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    rows={3}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Requirements (comma-separated)</label>
                  <textarea
                    value={job.requirements.join(', ')}
                    onChange={(e) => handleUpdateJob(index, 'requirements', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    rows={2}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => handleDeleteJob(index)}
                  className="flex items-center px-4 py-2 text-red-600 hover:text-red-700"
                >
                  <Trash className="h-5 w-5 mr-2" />
                  Delete
                </button>
                <button
                  onClick={() => console.log('Saving...')}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}