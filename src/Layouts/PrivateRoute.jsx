import { Navigate,  useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (user) return children;

  return <Navigate to={"/login"} state={location.pathname} replace={true} ></Navigate>;
};

export default PrivateRoute;
