import { Navigate } from 'react-router-dom';

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ isAuthenticated, redirectPath, children  }) => {
    return (!isAuthenticated) ? <Navigate to={redirectPath} replace /> : children 
};
