import { useParams } from 'react-router-dom';

import { useJob } from '../features/jobs/hooks/useJob';

export default function JobDetailsPage() {
  const { slug } = useParams();

  const { data: job, isPending, isError } = useJob(slug);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError || !job) {
    return <p>Job not found.</p>;
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {job.image_url && (
        <img
          src={job.image_url}
          alt={job.company_name}
          className="mb-6 h-48 w-full rounded-xl object-cover"
        />
      )}

      <h1 className="text-4xl font-bold">{job.title}</h1>

      <p className="mt-3 text-lg text-slate-600">{job.company_name}</p>

      <div className="mt-4 flex gap-3">
        <span>{job.location}</span>

        <span>{job.job_type}</span>

        <span>{job.work_mode}</span>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Job Description</h2>

        <p className="mt-4 whitespace-pre-line leading-7">{job.description}</p>
      </section>
    </main>
  );
}
