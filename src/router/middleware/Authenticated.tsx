import { ReactNode, useMemo } from "react";
import { useCookies } from "react-cookie";
import { Navigate, useLocation } from "react-router-dom";

interface AuthenticatedRouteProps {
  children: ReactNode;
}

const Authenticated: React.FC<AuthenticatedRouteProps> = ({ children }) => {
  const [cookies] = useCookies(["token"]);
  const hasToken = !!cookies.token;
  const location = useLocation();

  const whiteLists = useMemo(() => {
    return [
      "/login",
      "/register"
    ]
  }, [])

  if (hasToken && whiteLists.includes(location.pathname)) {
    return <Navigate to="/" replace />;
  }

  if (!hasToken && !whiteLists.includes(location.pathname)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Authenticated;
