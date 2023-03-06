import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
const userAuthContext = createContext();
const UseUserAuthProvider = ({ children }) => {
  // something i send
  const [user, setUser] = useState({});
  // my important actions
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    // Now i send everything
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
};
const useUserAuth = () => {
  return useContext(userAuthContext);
};
export { UseUserAuthProvider, useUserAuth };
