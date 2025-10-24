import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Books from "./pages/Books";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/PrivacyPolicy";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* 🏠 Landing Page — visible only if NOT logged in */}
        <Route
          path="/"
          element={!user ? <LandingPage /> : <Navigate to="/home" />}
        />

        {/* 🔑 Auth Pages */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/home" />}
        />

        {/* 👤 User Pages (Protected) */}
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/books"
          element={user ? <Books /> : <Navigate to="/login" />}
        />
        <Route
          path="/movies"
          element={user ? <Movies /> : <Navigate to="/login" />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
