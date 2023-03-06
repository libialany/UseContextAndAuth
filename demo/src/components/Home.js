import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.id;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);
  return (
    <section>
      <p>Welcome Home</p>
      <div>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
    </section>
  );
}

export default Home;
