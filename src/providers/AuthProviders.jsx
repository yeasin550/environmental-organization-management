
import  { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user)
  const [loading, setLoading] = useState(true)
  
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
     setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
     setLoading(true);
    return signOut(auth)
    
  }
  const googleSingIn = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const updateProfileLogin = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      unsubscribe();
    }
  }, [])

    const authInfo = {
      user,
      createUser,
      signIn,
      logOut,
      googleSingIn,
      loading,
      updateProfileLogin,
    };
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProviders;