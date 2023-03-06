import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <br></br>
        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email address"
          type="email"
        />
        <br></br>
        <label>password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="secret"
          type="password"
        />
        <br></br>
        <button type="submit">Log In</button>
      </form>
      <p>
        Don't have an account?{""}
        <NavLink to="/signup">Sign Up</NavLink>
      </p>
    </>
  );
}
export default Login;
