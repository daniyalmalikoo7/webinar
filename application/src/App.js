import {
  BrowserRouter as Router,
  Route,
  // Navigate,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Webinar from "./pages/webinar/Webinar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Webinar />} />
          <Route
            path="/login"
            element={user?.token ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}
