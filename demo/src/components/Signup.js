import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
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
        <button type="submit">Register</button>
      </form>
      <p>
        Already you have account?{""}
        <NavLink to="/login">Sign In</NavLink>
      </p>
    </>
  );
}
export default Signup;
