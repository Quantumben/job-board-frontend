import { useQuery } from '@tanstack/react-query';

import { getJobs } from '../../../api/jobs.api';

import type { JobFilters } from '../../../api/jobs.api';

export function useJobs(filters: JobFilters) {
  return useQuery({
    queryKey: ['jobs', filters],

    queryFn: () => getJobs(filters),
  });
}
