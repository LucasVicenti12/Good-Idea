import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {api, createSession} from "../services/api"

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

  const login = async (email, password) => {    
    const response = await createSession(email, password)
    console.log('login', response.data)
    // criar session
    const loggedUser = response.data.user
    const token = response.data.token
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(loggedUser))
    api.defaults.headers.Autorization = `Bearer ${token}`
    setUser(loggedUser)
    navigate('/')     
  }
  const logout = () => {
      console.log("logout")
      localStorage.removeItem("user")
      localStorage.removeItem("token")
      setUser(null)
      api.defaults.headers.Autorization = null
      navigate('/signin')
  }
  return(
    <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}