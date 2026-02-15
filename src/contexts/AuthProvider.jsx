import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "./../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      setLoading(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);
  const authInformation = {
    registerUser,
    signInUser,
    signInGoogle,
    logOut,
    updateUserProfile,
    loading,
    users,
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
