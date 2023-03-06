import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { NavLink, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <form>
        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email address"
          type="email"
        />
        <label>password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="secret"
          type="password"
        />
        <button type="submit" onClick={onSubmit}>
          Login
        </button>
      </form>
      <p>
        No account yet?{""}
        <NavLink to="/signup">sign up</NavLink>
      </p>
    </div>
  );
}

export default Login;
