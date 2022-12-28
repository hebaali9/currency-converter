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
import { store } from "./store";

function App() {
  const token = store.getState().token;
  const isLogedIn = token !== "";

  return (
    <>
      <h1 className="home">Home</h1>
      <BrowserRouter>
        <Link to="/signup">signup</Link>
        <br />
        <Link to="/login">logIn</Link>
        <br />
        <Link to="/currenctPage">CurrencyPage</Link>

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
