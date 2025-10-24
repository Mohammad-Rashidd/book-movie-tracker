// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/auth/register", { username, email, password });
//       alert("Signup successful! Please login.");
//       navigate("/login");
//     } catch (err) {
//       alert(err.response.data.error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
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
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import "../styles/Signup.css";
import signUpImage from "../assets/signuppagebg.jpg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { username, email, password });
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Left side - Form */}
        <div className="auth-left">
          <h2>Create Account 👋</h2>
          <p className="subtitle">Sign up to start tracking your favorites</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
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
              Sign Up
            </button>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="auth-right">
          <img
            src={signUpImage}
            alt="Signup Illustration"
            className="auth-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
