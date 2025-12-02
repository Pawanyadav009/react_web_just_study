import { NavLink } from "react-router-dom"

const Page404 = ()=>{
    return(<>
    <h2>Page not found</h2>
    <NavLink to='/'>Home</NavLink>
            <NavLink to='/Products'>Study metarial</NavLink>
            <NavLink to='/Donate'>Donate</NavLink>
            <NavLink to='/About'>About</NavLink>
    
    </>)
}
export default Page404
