import './ProductInfo.css'
import Header from "./Header"
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import Datalist from './Datalist'
import StudyCards from './studycards'

const ProductInfo = ()=>{

    const {ProductId} = useParams()
    const products = Datalist
    const data = products.find((product)=> product.id === Number(ProductId))

    if(!data){
        return <Navigate to='/Products'/>
    }
    
    return(<>
    <Header/>
    <div className="cantainer">
        <div className="video">
            <iframe width="100%" height="100%" src={data.videosrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="details">
            <h2>Name : {data.BookName}</h2><br />
            <p>{data.smalldec}</p>
            <br />
            <p><b>total data</b> : python pdf ,video ,js pdf</p>
            <h3>uploded by : {data.username}</h3>
            <br />
            <br />
            <div>
            <h3>download notes : <a href="main2.jpg" download>Click here</a></h3>
            <br />
            <a href={data.videosrc}>watch video on youtube</a>
            <br /><br />
            </div>
        </div>
        <div className="other-data">
            
            <h3>full decricption</h3>
            
            <p>{data.decricption}</p>
        </div>
    </div>
    <StudyCards/>
    <Footer/>
    </>)
}
export default ProductInfo