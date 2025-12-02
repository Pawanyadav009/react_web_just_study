import { NavLink,Link } from 'react-router-dom'
import './Footer.css'

const Footer = ()=>{
    return(<>
    <footer>
        <div className="website-info">
            <h2>let"s work together</h2>
            <a href="#">Contact</a><br />
            <Link to='/Donate'>Donate</Link><br />
            <a href="#">Sing in</a><br />
            <br />
            <p>we provide free support</p>
        </div><hr />
        <div className="our-info">
            <h2>Know us</h2>
            <Link to='/About'>About</Link><br />
            <p>Developed by Team Dream-Diffrent</p>
            <p>developer : pawan</p>
            <p>all Right resrved © Team Dream-Diffrent</p>
        </div><hr />
        <div className="social-media">
            <h2>Connect with us</h2>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
            <p>Facebook</p>
        </div>
    </footer>
    
    </>)
}
export default Footer