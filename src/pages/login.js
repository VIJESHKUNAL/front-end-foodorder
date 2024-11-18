// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/auth.css";

// const Login = () => {
//   return (
//     <div className="auth-container">
//       <div className="auth-form">
//         <h2>Login</h2>
//         <form>
//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" required />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input type="password" required />
//           </div>
//           <button type="submit" className="auth-button">
//             Login
//           </button>
//         </form>
//         <p>
//           Don't have an account? <Link to="/signup">Sign Up</Link>
//           <Link to="/" className="nav-button">
//             Go to Home
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { useAuth } from "../Context/authcontext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    try {
      // Send a GET request to the login API with credentials in headers
      const response = await axios.get(
        "http://127.0.0.1:8000/api/accounts/login/",
        {
          headers: {
            Email: email, // Replace Username with Email for the login
            Password: password,
          },
        }
      );

      if (response.status === 200) {
        // Navigate to the home page after successful login
        localStorage.setItem("userEmail", email);
        login();
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(
          error.response.data.error || "Invalid credentials. Please try again."
        );
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
          <Link to="/" className="nav-button">
            Go to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
