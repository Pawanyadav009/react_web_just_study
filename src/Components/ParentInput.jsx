import { useState } from "react"
import InputA from "./InputA"
import InputB from "./InputB"

const ParentInput = ()=>{
    const [val, setVal] = useState('')
    return(
        <>
        // <InputA val={val} setVal={ setVal } />
        // <InputB val={val} setVal={ setVal } />
        </>
    )
}
export default ParentInput;
