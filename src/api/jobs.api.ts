import api from './axios';

import type { Job } from '../types/job';
import type { PaginatedResponse } from '../types/api';

export interface JobFilters {
  search?: string;
  location?: string;
  category?: string;
  job_type?: string;
  work_mode?: string;
  page?: number;
}

export const getJobs = async (filters: JobFilters = {}): Promise<PaginatedResponse<Job>> => {
  const response = await api.get<PaginatedResponse<Job>>('/api/jobs', {
    params: filters,
  });

  return response.data;
};

export const getJob = async (slug: string): Promise<Job> => {
  const response = await api.get<{
    data: Job;
  }>(`/api/jobs/${slug}`);

  return response.data.data;
};

export const getMyJobs = async (): Promise<Job[]> => {
  const response = await api.get<{
    data: Job[];
  }>('/api/my-jobs');

  return response.data.data;
};

export const createJob = async (data: FormData): Promise<Job> => {
  const response = await api.post<{
    data: Job;
  }>('/api/jobs', data);

  return response.data.data;
};

export const updateJob = async (id: number, data: FormData): Promise<Job> => {
  data.append('_method', 'PUT');

  const response = await api.post<{
    data: Job;
  }>(`/api/jobs/${id}`, data);

  return response.data.data;
};

export const deleteJob = async (id: number): Promise<void> => {
  await api.delete(`/api/jobs/${id}`);
};
