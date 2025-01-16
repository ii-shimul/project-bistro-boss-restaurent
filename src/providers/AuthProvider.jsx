import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password, name = null, photoURL = null) => {
    setLoading(true);
    try {
      const userCreated = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userDetails = userCreated.user;
      console.log(user);
      await updateProfile(userDetails, {
        displayName: name,
        photoURL: photoURL,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
