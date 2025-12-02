import { Navigate, useParams } from "react-router-dom"
import Header from "./Header"
import Datalist from "./Datalist";
import { Link } from "react-router-dom";


const ProductDetails = ()=>{

    const {ProductId} = useParams();
    const products = Datalist
    console.log(ProductId)
    const data = products.find((product)=> product.id === Number(ProductId))

    if(!data){
        return <Navigate to='/Products'/>
    }

    return(<>
    <Header/>
    <h3>product details appear here..</h3>
    <br /><br />
        <div className="card" key={data.id}>
            <div className="image-card">
            <img src={data.image} alt="Image" style={{height : '100%', width : '100%'}} />
            </div>
            <div className="text-card"><h3>{data.Name}</h3>
            <p>{data.decricption}</p>
            <Link to={`/Products/${data.id}`}>see details</Link>
            </div>
        </div>  

        <img src="main2.jpg" alt="#" />





    </>)
}
export default ProductDetails 