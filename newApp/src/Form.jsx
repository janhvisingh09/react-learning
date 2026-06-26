   // import { useState } from 'react';

// function Form(){
//     const [name,setName] = useState("");
//     const updateName = (e)=>{
//         setName(e.target.value);
//     }
//     return(
//         <>
//             <form>
//                 <label> Enter your name :
//                 <input type="text" value={name} onChange={updateName} />
//                 </label>
//             </form>
//             <p> Name : {name}</p>
//         </>
//     )
// }
// export default Form;

// function Football (){
// const shoot = (a) => {
// alert(a);
// }
// return(
//     <button onClick={() => shoot("goal!")}>Take the shot!</button>
// )
// }

// export default Football ;

function Goal(props){
    const isGoal = props.isGoal;
    return(
        isGoal ? <>Made goal</> : <>Missed goal</>
    )
}
export default Goal;