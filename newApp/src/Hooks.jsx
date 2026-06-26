import { useState,useEffect } from "react";


function Hooks(){
    const [count,setCount] = useState(0);
    const [calculation,setCalculation] = useState(0);

    useEffect(()=>{
        setCalculation(()=>count*2);
    },[count]);

return (
<><p> Count :{count}</p>
<button onClick={()=>setCount(count+1)}>Increment</button>
<p> Calculation :{calculation}</p>
</>


)}

export default Hooks;
