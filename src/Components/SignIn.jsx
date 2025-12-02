import './SingIn.css'
import './Button.css'
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Usecontex from "./Usecontex"
import LoginInfo from "./LoginInfo"
import { LoginContext } from '../context/LoginContext'
import { useContext, useEffect } from 'react'

const SignIn = ()=>{
        const {setLoggedIn} = useContext(LoginContext);

        const navigate = useNavigate();

    const [Class,getclass] = useState(true)   // tougle classes

    const [errors, setErrors] = useState({});  // validation errors storing

    const [newUser,getInfoUser] = useState({   // newuser getting
        name : '',
        email : '',
        password : '',
        confirmPassword: "",
    })
    const [newuser,userdata] = useState([])  // newuser updating in local storage

        //-----------tougle class----------------\\


        function ChangeClass(){
            if(Class){getclass(false)}
            else{getclass(true)}}

        //-----------tougle class  end----------------\\


        const {name ,email,password,confirmPassword} = newUser;  // D-Struchering

    function gettingInfo(e){                          // getting data from inputs
        getInfoUser({...newUser,[e.target.name]: e.target.value})
    }

    // ---------------form validation start ----------------------------\\

    function validateName(name){
        if(name.trim().length< 3){
            return "Name must be at least 3 characters long";
        }
        
    }
    function validateEmail(email){
        if(!/\S+@\S+\.\S+/.test(email)){
            return "Email is invalid";
        }
    }
    function validatePassword(password){
        if(password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)){
            return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character (!@#$%^&*)";
        }}

        function validateConfirmPassword(confirmPassword){
        if(confirmPassword !== password){
            return "Passwords do not match";
        }
    }
        // ----------------------form validation end ---------------------------\\


    // -----------------------new account creating-----------------------------\\
    function newAccount(){

        const newErrors = {};
        const nameError = validateName(name);
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        const confirmPasswordError = validateConfirmPassword(confirmPassword);

        if(nameError) newErrors.name = nameError;
        if(emailError) newErrors.email = emailError;
        if(passwordError) newErrors.password = passwordError;
        if(confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;
        if(Object.keys(newErrors).length > 0){
        setErrors(newErrors);
        }
        else{
            getInfoUser({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
        

        const users = {name,email,password}
        const existingUser = JSON.parse(localStorage.getItem('users')) || [];
        if(existingUser.some(user => user.email ===email)){
            setErrors({email : 'email alredy in use'})
            return;
        } 
        existingUser.push(users)
        localStorage.setItem('users',JSON.stringify(existingUser))
            alert("Account created sucess");


            // ---------------local storage end ------------------\\
    setErrors({});
    userdata([])
    console.log(newuser)
        }}
// -----------------------new account creating end-----------------------------\\



    // -------------------login--------------------------------\\


    const [logindata,getdata] = useState({
        email : '',
        password : ''
    })
    function getlogininfo(e){
        getdata({...logindata,[e.target.name]: e.target.value})
    }
    function submit(){
    const existingUser = JSON.parse(localStorage.getItem('users'));
    const data = existingUser.find((info)=>info.email==logindata.email && info.password==logindata.password)
    if(data){
            setLoggedIn(true)
            navigate('/')
            const currentUser = {
                username : data.name,
                email : data.email,
                password : data.password
            }
            localStorage.setItem('currentuser',JSON.stringify(currentUser))
    }
    else{
        alert('email or password not matched')
    }}
    // ----------------login end -------------------------------------\\

    return(<>
    {/* <Header/> */}
        <div className="login-outer">
            <div className="login-info">

                <div className={(Class)? 'login':'hideClass' }>
                    <h2>Log In</h2>

                <h3>connect with us</h3>
                <input onChange={getlogininfo} name="email" type="email" placeholder="Enter email adress" />
                <input onChange={getlogininfo} name="password" type="password" placeholder="enter password.." />
                <button onClick={submit} className="Button">Log in</button>
                <p>Didn't have account?  <a onClick={ChangeClass} type="button">Sign Up</a></p>
                </div>
                
            {/* ----------------------new account -------------------- */}

                <div className={(!Class)? 'login':'hideClass' }>
                    <h2>Sign up</h2>
                <h3>connect with us</h3>
                
                <input name="name" onChange={gettingInfo} type="text" placeholder="Enter name" />
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}

                <input name="email" onChange={gettingInfo} type="email" placeholder="Enter email adress" />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                <input name="password" onChange={gettingInfo} type="password" placeholder="enter password.." />
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

                <input onChange={gettingInfo} name="confirmPassword" type="confirmPassword" placeholder="Conform password.." />
                {errors.confirmPassword && <p style={{color: "red"}}>{errors.confirmPassword}</p>}

                <button onClick={newAccount}  className="Button">Sign up</button>
                <p>Alredy have account?  <a onClick={ChangeClass} type="button">Login</a></p>
                </div>
            </div>


               {/* ----------------------new account end-------------------- */}

            <div className="image-login ">
                <img style={{height : '100%' ,width: '100%'}} src="LoginBackground.jpg" alt="login page image" />
            </div>
        </div>

    </>)
}
export default SignIn;