import React, {useState} from 'react';

function Mycomponent(){
    const [name,setName] = useState();

    const updateName = ()=>{
        setName('Janhvi Singh');
    }
    return(<div>
        <p>Name :{name} </p>
        <button onClick = {updateName}>setName</button>
    </div>)
}

export default Mycomponent;