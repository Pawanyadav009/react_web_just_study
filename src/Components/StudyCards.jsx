import Datalist from "./Datalist"
import { useNavigate } from "react-router-dom"

const StudyCards = ()=>{
    const product = Datalist
        const navigate = useNavigate();

    return(<>
    <div className="products">

        {
            product.map((val)=>{
                return(
                    <div className="card" key={val.id}>
            <div className="image-card">
                <img src={val.image} alt="#" style={{height : '100%', width : '100%'}} />
            </div>
            <div className="text-card"><h3>{val.BookName} by {val.username}</h3><br />
            <p>{val.smalldec}</p><br />
            <button onClick={()=>{navigate(`/Products/${val.id}`)}} className="Button">See details</button>
            </div>
        </div>
                )
            }) 
        }

        

    </div>
    </>)
}
export default StudyCards;