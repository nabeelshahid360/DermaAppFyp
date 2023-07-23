import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);
    
    const signIn = (email, password) =>  {
      return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const signout = () => {
      return signOut(auth);
    }

    const resetPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        if(currentUser){
          setUser(currentUser);
        }
        else{
          setUser(undefined);
        }          
        });
        return () => {
          unsubscribe();
        };
    }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};