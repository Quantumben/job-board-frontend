import type { User } from "./user";

export type JobType =
    | "full-time"
    | "part-time"
    | "contract"
    | "internship";

export type WorkMode =
    | "remote"
    | "hybrid"
    | "on-site";

export interface Job {
    id: number;
    title: string;
    slug: string;
    company_name: string;
    image_url: string | null;

    description: string;
    requirements: string;

    location: string;
    category: string;

    job_type: JobType;
    work_mode: WorkMode;

    salary_min: number | null;
    salary_max: number | null;

    application_url: string | null;
    application_email: string | null;

    deadline: string | null;

    user: User;

    created_at: string;
    updated_at: string;
}