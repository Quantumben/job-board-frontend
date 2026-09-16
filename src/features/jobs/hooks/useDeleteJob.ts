import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteJob } from '../../../api/jobs.api';

export function useDeleteJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteJob,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['jobs'],
      });

      queryClient.invalidateQueries({
        queryKey: ['my-jobs'],
      });
    },
  });
}

const deleteMutation = useDeleteJob();

const handleDelete = (id: number) => {
  const confirmed = window.confirm('Are you sure you want to delete this job?');

  if (!confirmed) {
    return;
  }

  deleteMutation.mutate(id);
};
