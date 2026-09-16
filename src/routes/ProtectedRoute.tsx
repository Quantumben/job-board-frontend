import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';

export default function ProtectedRoute() {
  const { user, initialized } = useAppSelector((state) => state.auth);

  if (!initialized) {
    return <div className="p-10 text-center">Checking authentication...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
