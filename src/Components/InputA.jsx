
import { useState } from "react";

const InputA = ({val,setVal})=>{
    function handlechange(e){
        setVal(e.target.value);
    }
    return(<>
    <input type="text" onChange={handlechange} placeholder="enter something" />
    </>)


}
export default InputA