import { useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import Usecontex from "./Usecontex";
import { createContext } from "react";
const LoginInfo = ({children})=>{

const currentUser = JSON.parse(localStorage.getItem('currentuser'))
    const [loggedIn,setLoggedIn] = useState(false)
    return(<>
    <LoginContext.Provider value={{loggedIn,setLoggedIn}}>
        {children}
    </LoginContext.Provider> 
    </>)

}
    
export default LoginInfo;

