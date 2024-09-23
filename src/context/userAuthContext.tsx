import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, User } from "firebase/auth";
import { useState, createContext, useEffect, useContext } from "react";

interface IUserAuthProviderProps {
  children: React.ReactNode;
}

type AuthContextData = {
  user: User | null;
  logIn: typeof logIn;
  signUp: typeof signUp;
  logOut: typeof logOut;
  googleSignIn: typeof googleSignIn;
}

const logIn = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

const signUp = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
  signOut(auth);
}

const googleSignIn = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
}

export const userAuthContext = createContext<AuthContextData>({
  user: null,
  logIn,
  signUp,
  logOut,
  googleSignIn, 
});

export const UserAuthProvider: React.FC<IUserAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        console.log(`The logged in user is : ${user}`);
        
        setUser(user);
      }
    })
  
    return () => {
      unsubcribe();
    }
  }, [])
  

  const value: AuthContextData = {
    user: null,
    logIn,
    signUp,
    logOut,
    googleSignIn, 
  }
  return (
    <userAuthContext.Provider value={value}> 
      {children} 
    </userAuthContext.Provider>
  )
};

export const useUser = () => {
  return useContext(userAuthContext);
}