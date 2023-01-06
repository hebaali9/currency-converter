import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes({ children }: { children: JSX.Element }) {
  type RootState = {
    loggedIn: Boolean;
  };
  const isLogedIn = useSelector((state: RootState) => state.loggedIn);

  return isLogedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoutes;
