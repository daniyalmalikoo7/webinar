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
import MyWebinar from "./pages/myWebinar/MyWebinar";

export default function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Webinar />} />
          <Route
            path="/login"
            element={user?.token ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/my_webinar" element={<MyWebinar />} />
        </Routes>
      </Router>
    </div>
  );
}
