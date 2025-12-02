import Header from "./Header";
import './Donate.css'
import Footer from "./Footer";

const Donate = ()=>{
    console.log()
    return(<>
    <Header/>
    <div className="donate">
        <div className="upload">
            <h2>Help students And provide Notes </h2><br /> 
            <div><label htmlFor="name">Enter subject Name :</label>
        <input id="name" name="name" type="text" /></div>
        <br />
        <div><label htmlFor="Small-decricption">Small decricption :</label>
        <input type="text" id="Small-decricption" name="small-decricption" /></div>
        
        <br />
        <div><label htmlFor="video">enter video link :</label>
        <input type="text" id="video" name="video" /></div>
        <br />
        <div><label htmlFor="file-name">enter file name with extenssion(zip,pdf,rar) :</label>
        <input type="text" id="file-name" name="file-name" /></div>
        <br />
        <div><label htmlFor="upload-file">upload file :</label>
        <input style={{border : 'none'}} id="upload-file" name="file" type="file" placeholder="upload file" /></div>
        <br />
        <div><label htmlFor="video-file">Upload video :</label>
        <input style={{border : 'none'}} type="file" id="video-file" name="video-file" /></div>
        <br />
        <div><label htmlFor="decricption">enter full decricption :</label>
        <textarea name="decricption" id="decricption"></textarea></div>
        <br />
        <button className="Button">Upload</button>
        </div>
        
    </div>
    <Footer/>
    </>)
}
export default Donate;