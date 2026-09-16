import { useQuery } from '@tanstack/react-query';

import { getJob } from '../../../api/jobs.api';

export function useJob(slug: string | undefined) {
  return useQuery({
    queryKey: ['job', slug],

    queryFn: () => getJob(slug!),

    enabled: Boolean(slug),
  });
}
