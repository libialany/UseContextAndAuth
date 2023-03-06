import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const { logOut } = useUserAuth();
  const { user } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div>
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="">
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </>
  );
}

export default Home;
