import Header from "./Header"
import './About.css'
import Footer from './Footer'


const About = ()=>{
    return(<>
    <Header/>
        <div className="about">
            <div><h2>About Us</h2>
            <p>Just Study is a free, open, and student-friendly learning platform created to make education easier and accessible for everyone. Our mission is simple — to help students find, learn, and share knowledge without any cost or barriers.
            <br />
            Here, students can download notes, PDFs, and video lectures on various subjects and topics. Whether you’re preparing for exams, brushing up on concepts, or exploring new areas of study, Just Study provides you with reliable and easy-to-understand resources — all in one place.
            <br />
            But that’s not all! Just Study also gives every learner a chance to upload their own notes and become a part of a growing community that believes in learning together and helping each other.

            We’re constantly improving, adding new features, and welcoming new ideas from students like you — because Just Study isn’t just a website, it’s a movement toward free education for all. 
            <br /><br />
            Learn freely. Share proudly. Grow together — only on Just Study. </p>
            <br />
            <hr />
            <h3>Coockies</h3>
            <p>At Just Study, we respect your privacy. We do not use or store cookies to track, collect, or save any personal information.</p><br />
            <hr />  
            <h3>About the Creator – Dream-Different Team</h3>
            <p>Just Study has been proudly developed by the Dream-Different Team, a group of passionate learners and tech enthusiasts who believe in making education free and accessible for everyone. The project is led by Pawan, a dedicated developer with a strong vision to create a platform by students, for students.
                <br />
            Pawan and his team have worked hard to design Just Study as a simple, clean, and user-friendly website where students can freely download and upload notes, PDFs, and video lectures. Their goal is to build a strong community where knowledge is shared openly and learning never stops.
            <br />
            With continuous updates and new features, the Dream-Different Team aims to keep improving Just Study — turning it into a global hub of student learning and collaboration.</p>
            
            <br /><hr />
            <h3>Contact Us</h3>
            <br />
            </div>
        </div>
        <Footer/>
    </>)
}
export default About