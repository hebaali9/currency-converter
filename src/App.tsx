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

function App() {
  return (
    <>
      <h1 className="text-center sm:text-left text-blue-600">Home page</h1>
      <BrowserRouter>
        <Link to="/signup">
          <li>signup</li>
        </Link>
        <br />
        <Link to="/login">
          <li>logIn</li>
        </Link>
        <br />
        <Link to="/currency-converter">
          <li>Currency Converter</li>
        </Link>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/currency-converter"
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
