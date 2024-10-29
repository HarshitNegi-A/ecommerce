import React, {  useState } from "react";

const LoginContext=React.createContext({
    token: '',
    login:(token)=>{},
})

export const LoginContextProvider=(props)=>{
    const initailToken=localStorage.getItem('token')
    const [token,setToken]=useState(initailToken)

    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem('token',token);
    }   

    const contextValue={
        token:token,
        login:loginHandler,
    }

    return <LoginContext.Provider value={contextValue}>{props.children}</LoginContext.Provider>
}

export default LoginContext;