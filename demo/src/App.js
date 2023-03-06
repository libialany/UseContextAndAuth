import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Layout from "./components/Layout";
function App() {
  return (
    <Router>
      <Routes>
        <Route index="/" element={<Layout />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
