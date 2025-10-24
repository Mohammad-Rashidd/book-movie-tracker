// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";
// import { AuthContext } from "../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       setUser({ token: res.data.token });
//       navigate("/"); // redirect to home
//     } catch (err) {
//       alert(err.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

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
      localStorage.setItem("token", res.data.token);
      setUser({ token: res.data.token });
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
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
