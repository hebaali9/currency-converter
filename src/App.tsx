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

          <Route element={<ProtectedRoutes />}>
            <Route path="/currenctPage" element={<CurrencyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
