export interface Job {
  id: string;
  title: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

export interface AdminCredentials {
  username: string;
  password: string;
}