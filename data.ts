import { AdminCredentials, Job } from './types';

export const ADMIN_CREDENTIALS: AdminCredentials = {
  username: 'Klaus',
  password: 'Klaus20069@shi'
};

export const initialJobs: Job[] = [
  {
    id: '1',
    title: 'Construction Site Manager',
    location: 'Dubai, UAE',
    salary: 'AED 12,000 - 15,000',
    description: 'Leading construction projects across Dubai with a focus on residential developments.',
    requirements: ['10+ years experience', 'Civil Engineering degree', 'Arabic language skills preferred'],
    postedDate: '2024-03-15'
  },
  {
    id: '2',
    title: 'Hotel Staff',
    location: 'Doha, Qatar',
    salary: 'QAR 3,000 - 4,000',
    description: 'Various positions available in 5-star hotels across Doha.',
    requirements: ['Hospitality experience', 'English proficiency', 'Customer service skills'],
    postedDate: '2024-03-14'
  }
];