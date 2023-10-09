import { Navigate } from "react-router-dom";
import useAdminPanel from "../hooks/useAdminPanel";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAdminPanel();

  if (loading) return <h1>Loading...</h1>;
  if (!user) return <Navigate to="/login" />;

  return <>{children}</>
};

export default ProtectedRoutes;
