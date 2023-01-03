import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import SignUp from "./siginUp";
import LogIn from "./logIn";
import ProtectedRoutes from "./protectedRoutes";
import CurrencyPage from "./currencyPage";
import { useSelector } from "react-redux";
import { store } from "./store";
type RootState = {
  token: string;
};

function App() {
  const token = useSelector((state: RootState) => state.token);

  return (
    <>
      <h1 className="home">Home page</h1>
      <BrowserRouter>
        <Link to="/signup">
          <li>signup</li>
        </Link>
        <br />
        <Link to="/login">
          <li>logIn</li>
        </Link>
        <br />
        <Link to="/currenctPage">
          <li>CurrencyPage</li>
        </Link>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/currenctPage"
            element={
              <ProtectedRoutes>
                <CurrencyPage />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
