import './Home.css'
import './Button.css'
import Datalist from "./Datalist"



import Header from "./Header"
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useContext, useEffect } from 'react'
import Usecontex from './Usecontex'
import LoginInfo from './LoginInfo'
import { LoginContext } from '../context/LoginContext'


const Home =()=>{


    const {loggedIn} = useContext(LoginContext);

    if(!loggedIn){
        localStorage.removeItem('currentuser')

    }

    const navigate = useNavigate();
    function handleClick(){
        navigate('/Products')
    }
    function handledonor(){
        navigate('/Donate')
    }
    function improve(){
        navigate('/About')
    }
    const product = Datalist
        const loginInfo = loggedIn
        
        if(!loginInfo.loggedIn){
        // return <Navigate to='/SignIn'/>
        // alert("logged out")
    }
    return(<>
    <Header/>
    <div className="content">
        <div className="main">
            <h2>Get free study Meterial</h2>
            <p>Welcome to Just Study, a free and open learning platform made especially for students! Here, you can easily find and download high-quality notes, PDFs, and video lectures on various subjects — all at one place. 
            </p>
            <button className='Button' onClick={handleClick}>Get Now</button>
        </div>
        <div className="download-section">
            <div className="text-download">
                <h3>Your Smart Study Partner!</h3>
                <p>  No more wasting hours searching the internet for reliable study material — Just Study brings it all together for you. Every note uploaded here is a small step toward building a strong, supportive learning network for everyone.

So, start exploring, start learning, and start sharing!
Because when we learn together, we grow together.</p>
                <br />
                <button className='Button' onClick={handleClick}>Download</button>

            </div>
            <div className="image-download">
                <img src="main2.jpg" style={{height : '100%' , width : '100%'}} alt="" />
            </div>
        </div><br />

        <div className="download-section">
            <div className="image-download">
                <img src="main4.jpg" style={{height : '100%' , width : '100%'}} alt="" />
            </div>
            <div className="text-download">
                <h3>Upload Your Notes – Share Knowledge, Help Others!</h3>
                <p>At Just Study, we believe that every student can be a teacher too! Your notes can make a big difference in someone’s learning journey. If you’ve prepared notes, summaries, or solved papers — don’t keep them just for yourself. Upload them here and help thousands of other students who are searching for the same topics.</p>
                <br />
                <button className='Button' onClick={handledonor} >Help Students</button>
            </div>
            
        </div>
        
    
{/* -------------------------------------------------------------------------------------------------------------- */}
        <div className="cards-area">
            <div className="card-area2">
        { product.map((val)=>{
            const data = val.id
            if(data<=4){
            return(
            
    
        <div className="card-Main" key={val.id}>
            <div className="card-image">
                <img  src={val.image} alt="#" style={{height : '100%' , width : '100%'}} />
            </div>
            <div className="text-card-main">
                <h3>Book {val.username}</h3>
                <p>{val.smalldec}</p>
                <button className='Button' onClick={()=>{navigate(`/Products/${val.id}`)}}>see Notes</button>
            </div>
        </div>  
    
            )}
        }
        )}
            </div>
        </div>
{/* ............................................. */}
<div className="Help-section">
    <h2>Help us to improve Comunity</h2>
    <p>At Just Study, we’re not just building a website — we’re building a student-powered community where everyone can contribute, learn, and grow together. If you have creative ideas, suggestions, or technical skills, we’d love to have you join our mission of making education free and accessible for all.
            <br />
Here’s how you can contribute: <br />
💬 Share Your Ideas: Have thoughts about new features, design changes, or improvements? Tell us! Your ideas can help make Just Study better for everyone. <br />
🧠 Join Development: If you know web development, programming, or design, you can collaborate with our team to improve the platform. <br />
📢 Spread the Word: Help us grow by sharing Just Study with your classmates, schools, and social media circles. <br />
<br /> <br />
Every contribution — big or small — helps us move one step closer to building a stronger, smarter student community. Together, we can create a platform by students, for students, and of students. 🌍

Be a part of the change.
Be a part of Just Study.</p>
            <button className='Button' onClick={improve}>Handshake</button>
</div>
</div>
<Footer/>
    </>)
}
export default Home