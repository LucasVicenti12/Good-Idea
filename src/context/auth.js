import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const navigate = useNavigate(); 
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');
    if(recoveredUser){
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = async (email) => {    
    
    const loggedUser = email
    const token = Math.random().toString(36).substring(2);
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(loggedUser))
    setUser(loggedUser)
    navigate('/')     
  }
  const logout = () => {
      console.log("logout")
      localStorage.removeItem("user")
      localStorage.removeItem("id")
      setUser(null)
      navigate('/signin')
  }
  return(
    <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}