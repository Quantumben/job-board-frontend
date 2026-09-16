import { useState } from 'react';

import { useJobs } from '../features/jobs/hooks/useJobs';

export default function JobsPage() {
  const [search, setSearch] = useState('');

  const { data, isPending, isError, error } = useJobs({search,});

  if (isPending) {
    return <div className="p-10 text-center">Loading jobs...</div>;
  }

  if (isError) {
    return <div className="p-10 text-center text-red-600">{error.message}</div>;
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Find your next opportunity</h1>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search jobs..."
        className="mb-8 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((job) => (
          <div key={job.id} className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{job.title}</h2>

            <p className="mt-2 text-slate-600">{job.company_name}</p>

            <p className="mt-2">{job.location}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
