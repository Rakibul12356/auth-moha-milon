import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import auth from "../../firebase.config";

export const AuthContext =createContext(null);

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]= useState(true);

  const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signInUser =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = ()=>{
    setLoading(true)
   return signOut(auth)
  }
 useEffect(() =>{
  const unSubScrive = onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
    console.log('fjh8uryu',currentUser)
    setLoading(false)
  });
  return ()=>{
    unSubScrive()
  }
 },[])
    const authInfo={
      user,
      loading,
      createUser,
      signInUser,
      logOut}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

AuthProvider.propTypes ={
    children:PropTypes.node
}