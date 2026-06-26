import { useState } from 'react';

// function Textarea(){
//     const [text,setText] = useState("");

//     const Handlechange = (event)=>{
//         setText(event.target.value);
//     }

// return(
//     <>
//     <select  value={text} onChange={Handlechange}>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//     </select>
//     </>
// )}

function Myform(){
    const [text,setText] = useState("");
    
    const Handlechange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setText(values => ({...values,[name]:value}))
}
return (
    <>
    <label>
        <form>
            <input type="text" 
            name="name" value={text.name || ""} 
            onChange={Handlechange} 
            placeholder='Enter your name' />
        </form>
    </label>
    <label>
        <form>
            <input type="text" 
            name="email" value={text.email || ""} 
            onChange={Handlechange} 
            placeholder='Enter your email' />
        </form>
    </label>
    <p>Current Values : {text.name}</p>
    <p>Current Values : {text.email}</p>
    </>
)}

export default Myform;