import { useState } from "react";
import Header from "./Header";
import './Profile.css'
import { useNavigate } from "react-router-dom";

const Editprofile = ()=>{
    const currentUser = JSON.parse(localStorage.getItem('currentuser'))

    const navigate = useNavigate()
const [errors, setErrors] = useState({}); 
const [editdata,geteditdata] = useState({
    name : currentUser.username,
    password : currentUser.password
})

    function getinputdata(e){
        
        geteditdata({...editdata,[e.target.name]:e.target.value})

        console.log(editdata.name);

        

    }
    

    const {name,password} = editdata;

    function validateName(name){
        if(name.trim().length< 3){
            return "Name must be at least 3 characters long";
        }
        
    }
    function validatePassword(password){
        if(password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)){
            return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character (!@#$%^&*)";
        }}



    function submit(){
        

// console.log(editdata)

        const newErrors = {};
        const nameError = validateName(name);
        const passwordError = validatePassword(password);

        if(nameError) newErrors.name = nameError;
        if(passwordError) newErrors.password = passwordError;

        if(Object.keys(newErrors).length > 0){
        setErrors(newErrors);
        }

        else{
        setErrors({});

                const existingUser = JSON.parse(localStorage.getItem('users'));
                const data = existingUser.find((info)=>info.email==currentUser.email)

                const userdata = JSON.parse(localStorage.getItem('currentuser'));    
                    if(data){
                    data.name = editdata.name
                    data.password = editdata.password
                    localStorage.setItem('users',JSON.stringify(existingUser))
                    
                    userdata.username = editdata.name
                    userdata.password = editdata.password

                    localStorage.setItem('currentuser',JSON.stringify(userdata))

        }}}

        function cancel(){
            navigate('/Profile')
        }




    return(<>
    <Header/>
    <div className="editprofile">
        <div className="circule" style={{
        display : 'flex', justifyContent: 'center', alignItems : 'center',
        height : '100px', width : '100px', borderRadius : '50%', backgroundColor : 'green', color : 'white', fontSize : '45px'}}>
            {currentUser.username[0]}
            </div>

        <div>
            <label htmlFor="name">UserName</label><br />
            <input type="text" defaultValue={currentUser.username}  onChange={getinputdata} id="name" name="name"/>
        </div>
        {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
        
        <div>
            <label htmlFor="password">Password</label><br />
            <input defaultValue={currentUser.password} onChange={getinputdata} type="text" id="password" name="password"/>
        </div>
        {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
        <div><button className='button-profile' onClick={submit}>✅ Change</button>
    <button className='button-profile' onClick={cancel}>❌ Cancel</button>
    </div>

    </div>
    
    </>)
}
export default Editprofile;