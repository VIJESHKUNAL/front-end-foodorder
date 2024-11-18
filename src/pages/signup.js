// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/auth.css";

// const SignUp = () => {
//   return (
//     <div className="auth-container">
//       <div className="auth-form">
//         <h2>Sign Up</h2>
//         <form>
//           <div className="form-group">
//             <label>Full Name</label>
//             <input type="text" required />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" required />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input type="password" required />
//           </div>
//           <div className="form-group">
//             <label>Confirm Password</label>
//             <input type="password" required />
//           </div>
//           <button type="submit" className="auth-button">
//             Sign Up
//           </button>
//         </form>
//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//         <p>
//           <Link to="/home">Home</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/register/",
        {
          username: fullName, // Assuming the full name is used as the username
          email: email,
          password: password,
        }
      );

      if (response.status === 201) {
        // Redirect to login page on successful registration
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error || "Registration failed");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign Up</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
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
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
