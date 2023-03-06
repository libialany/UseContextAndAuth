import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async(e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        const user= userCredential.user;
        console.log(user);
        navigate('/login');
    }).catch((error)=>{
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
          Signup
        </button>
      </form>
      <p>
        Already have an account?{""}
        <NavLink to="/login">sign in</NavLink>
      </p>
    </div>
  );
}

export default Signup;
