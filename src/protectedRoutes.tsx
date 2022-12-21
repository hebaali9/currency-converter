import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};
function ProtectedRoutes() {
  const isAth = useAuth();

  return isAth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
