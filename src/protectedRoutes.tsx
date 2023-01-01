import { Navigate, Outlet } from "react-router-dom";
import { store } from "./store";

function ProtectedRoutes({ children }: { children: JSX.Element }) {
  const token = store.getState().token;
  const isLogedIn = token;

  return isLogedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoutes;
