import {useState} from 'react';

// function events (){
// const Cars = [{id: 1, name: 'Toyota'}, {id: 2, name: 'Honda'}];

// return (
//     <>
//         <h1>List of cars</h1>
//         <ul>{Cars.map((car)=>(<li key={car.id}>{car.name}</li>))}</ul>
//     </>
// )}
// export default events;

function myName(){
const [name, setName] = useState("");
const updateName = (e)=>{
    setName(e.target.value);}
    function handleSubmit(e){
        e.preventDefault();
        alert(`Hello, ${name}!`);
    }
    function myForm(e){
const formText [text, setText] = useState("");
const updateText = (e)=>{
    setText(e.target.value);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Enter your name :</label>
            <input
            type="text"
            value={name}
            onChange={updateName}
            ></input>
            <input type="submit" value="Submit" /></form>
            <p>Hello, {name}!</p>
            </>
    )
}
export default myName;
