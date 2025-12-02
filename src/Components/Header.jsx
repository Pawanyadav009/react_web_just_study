import './Header.css'
import './Button.css'
import { NavLink, useNavigate } from 'react-router-dom'
import LoginInfo from './LoginInfo'
import { useContext,useEffect } from 'react'
import { LoginContext } from '../context/LoginContext'

const Header = ()=>{
    const loginInfo = LoginInfo
    const navigate = useNavigate()
    function SignIn(){
        navigate('/SignIn')
    }
    const {loggedIn} = useContext(LoginContext);
    console.log(loggedIn)
    return(<>
    <div className="Navbar"> 
        <div className="logo"><h1>just study</h1></div>
        <div className="Nav-links">
            <NavLink  to='/'>Home</NavLink>
            <NavLink  to='/Products'>Study metarial</NavLink>
            <NavLink to='/About'>About</NavLink>
            {(loggedIn) ? 
            <>
            <NavLink to='/Donate'>Help Students</NavLink>
            <NavLink to='/Profile'>Profile</NavLink></>
            :<button onClick={SignIn} style={{marginLeft : '20px'}} className='Button'>Login</button>
            }
            

            
                    </div>
    </div>
    </>)
}
export default Header