import * as Yup from 'yup';

export const jobSchema = Yup.object({
  title: Yup.string().required('Job title is required'),

  company_name: Yup.string().required('Company name is required'),

  description: Yup.string()
    .min(50, 'Description must contain at least 50 characters')
    .required('Description is required'),

  location: Yup.string().required('Location is required'),

  category: Yup.string().required('Category is required'),

  job_type: Yup.string().required('Job type is required'),

  work_mode: Yup.string().required('Work mode is required'),
});
