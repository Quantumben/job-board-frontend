import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { jobSchema } from '../../schemas/job.schema';

import { useCreateJob } from '../../features/jobs/hooks/useCreateJob';

interface JobFormValues {
  title: string;
  company_name: string;
  description: string;
  location: string;
  category: string;
  job_type: string;
  work_mode: string;
  image: File | null;
}

export default function CreateJobPage() {
  const navigate = useNavigate();

  const createJobMutation = useCreateJob();

  const formik = useFormik<JobFormValues>({
    initialValues: {
      title: '',
      company_name: '',
      description: '',
      location: '',
      category: '',
      job_type: '',
      work_mode: '',
      image: null,
    },

    validationSchema: jobSchema,

    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append('title', values.title);

      formData.append('company_name', values.company_name);

      formData.append('description', values.description);

      formData.append('location', values.location);

      formData.append('category', values.category);

      formData.append('job_type', values.job_type);

      formData.append('work_mode', values.work_mode);

      if (values.image) {
        formData.append('image', values.image);
      }

      await createJobMutation.mutateAsync(formData);

      navigate('/dashboard/jobs');
    },
  });

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Post a Job</h1>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label className="mb-2 block font-medium">Job title</label>

          <input
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-lg border p-3"
          />

          {formik.touched.title && formik.errors.title && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.title}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium">Company</label>

          <input
            name="company_name"
            value={formik.values.company_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Description</label>

          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={8}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Job Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              const file = event.currentTarget.files?.[0];

              formik.setFieldValue('image', file ?? null);
            }}
          />
        </div>

        <button
          type="submit"
          disabled={createJobMutation.isPending}
          className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white disabled:opacity-50"
        >
          {createJobMutation.isPending ? 'Posting...' : 'Post Job'}
        </button>
      </form>
    </main>
  );
}
