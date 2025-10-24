import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";
import "../styles/Login.css";
import loginImage from "../assets/loginpagebg.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });

      // Store token & username in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);

      // Update context
      setUser({ token: res.data.token, username: res.data.username });

      // Navigate to home
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Welcome Back 👋</h2>
          <p className="subtitle">Login to continue</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>
        </div>

        <div className="auth-right">
          <img src={loginImage} alt="Auth Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;
