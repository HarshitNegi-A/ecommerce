import React, {  useState } from "react";

const LoginContext=React.createContext({
    token: '',
    email:'',
    isLoggedIn: false,
    addEmail:(email)=>{},
    login:(token)=>{},
    logout:()=>{},
})

export const LoginContextProvider=(props)=>{
    const initailToken=localStorage.getItem('token')
    const initailEmail=localStorage.getItem('email')
    const [token,setToken]=useState(initailToken)
    const [email,setEmail]=useState(initailEmail)

  
    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem('token',token);
    }   
     const addEmailHandler=(email)=>{
        setEmail(email);
        localStorage.setItem('email',email);
     }
    const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
    }

    const contextValue={
        token:token,
        email:email,
        isLoggedIn:userIsLoggedIn,
        addEmail:addEmailHandler,
        login:loginHandler,
        logout:logoutHandler,
    }
    

    return <LoginContext.Provider value={contextValue}>{props.children}</LoginContext.Provider>
}

export default LoginContext;