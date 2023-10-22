import { Navigate } from "react-router-dom";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoutes({ children }: ProtectedRouteProps) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Render the children when the user is authenticated
  return <>{children}</>;
}
