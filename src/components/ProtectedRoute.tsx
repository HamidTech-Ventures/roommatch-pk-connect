
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
  ownerOnly?: boolean;
}

const ProtectedRoute = ({ children, adminOnly = false, ownerOnly = false }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  if (ownerOnly && user?.role !== 'owner') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
