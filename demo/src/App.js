import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import { UseUserAuthProvider } from "./context/UserAuthContext";
function App() {
  return (
    <Router>
      <UseUserAuthProvider>
        <Routes>
          <Route index="/" element={<Layout />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UseUserAuthProvider>
    </Router>
  );
}

export default App;
