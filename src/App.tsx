import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobDetailsPage from './pages/JobDetailsPage';

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

import DashboardPage from './pages/dashboard/DashboardPage';
import CreateJobPage from './pages/dashboard/CreateJobPage';
import EditJobPage from './pages/dashboard/EditJobPage';
import MyJobsPage from './pages/dashboard/MyJobsPage';
import ProfilePage from './pages/dashboard/ProfilePage';

import NotFoundPage from './pages/NotFoundPage';

import ProtectedRoute from './routes/ProtectedRoute';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/jobs" element={<JobsPage />} />

      <Route path="/jobs/:slug" element={<JobDetailsPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/dashboard/jobs" element={<MyJobsPage />} />

        <Route path="/dashboard/jobs/create" element={<CreateJobPage />} />

        <Route path="/dashboard/jobs/:id/edit" element={<EditJobPage />} />

        <Route path="/dashboard/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
