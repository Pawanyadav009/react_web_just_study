import { Link, Navigate } from "react-router-dom"
 import Header from "./Header"
import './Products.css'
import './Button.css'
import Footer from "./Footer"
import StudyCards from "./studycards"
const Products =()=>{
    const isLoggedin = true;

    if(!isLoggedin){
        return <Navigate to='/SignIn'/>
    }

    return(<>
    <Header/>
    <StudyCards/>
    <Footer/>
    </>)
}
export default Products