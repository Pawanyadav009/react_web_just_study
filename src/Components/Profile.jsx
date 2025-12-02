import { useNavigate } from "react-router-dom";
import Header from "./Header";
import './Profile.css'
import { LoginContext } from '../context/LoginContext'
import { useContext, useEffect } from 'react'

const Profile = ()=>{

    


    const {loggedIn,setLoggedIn} = useContext(LoginContext);

    if(!loggedIn){
        localStorage.removeItem('currentuser')

    }

    const navigate = useNavigate()
    const currentUser = JSON.parse(localStorage.getItem('currentuser'))
    
    function naviagateEdit(){
        navigate('/Editprofile')
    }
    function Logout(){
        localStorage.removeItem('currentuser')
        setLoggedIn(false)

        navigate('/')
    }
    return(<>
    <Header/>
    <div className="profile">
        <div className="circule" style={{
        display : 'flex', justifyContent: 'center', alignItems : 'center',
        height : '100px', width : '100px', borderRadius : '50%', backgroundColor : 'green', color : 'white', fontSize : '45px'}}>
        {(loggedIn)? currentUser.username[0] : <p>?</p>} 
    </div>

    <h2>name :{(loggedIn)? currentUser.username :'No user found'} </h2>
    <h2>email : {(loggedIn)? currentUser.email : 'email not found'}</h2>
    <h3>password :{(loggedIn)? currentUser.password : 'if email not exists then why pass exists'}</h3>
    <div>{(loggedIn)?<> <button className='button-profile' onClick={naviagateEdit}>Edit profile</button>
    <button className='button-profile' onClick={Logout}>Log out</button></>
    : <p>please login first</p>}    </div>
    </div>
    
    </>)
}
export default Profile;