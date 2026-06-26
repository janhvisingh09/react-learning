import { useState } from "react";

function TaskApp(){
    const [tasks,setTasks] = useState(["eat breakfast","go to school","do homework"]);
    const [newTask,setNewTask] = useState([]);

    function handleInputTask(event){
        setNewTask(event.target.value)

    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks( t=>[...t,newTask]);
            setNewTask(""); // Clear the input field after adding the task
        }
    
    }
    function deleteTask(index){
const updatedTasks = (tasks.filter((_,i) => i !== index));
setTasks(updatedTasks);
    }

    function moveTaskup(index){
if(index>0){
    const updatedTasks=[...tasks];
    [updatedTasks[index-1],updatedTasks[index]]=[updatedTasks[index],updatedTasks[index-1]];
    setTasks(updatedTasks);
}
    }
    function moveTaskdown(index){ 
        if(index<tasks.length-1){
    const updatedTasks=[...tasks];
    [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
    setTasks(updatedTasks);
}

    }


    return (
        <>
        <div className = "to-do-list">
            <h1>TO-DO LIST</h1>
        </div>
        <div>
<input
type="text"
 placeholder="Enter a new task..."
 value = {newTask} 
 onChange = {handleInputTask}/>
 <button className = "add-task-btn"
 onClick = {addTask}
 >Add Task</button>
        </div>
        <ol>{tasks.map((task,index)=>
        <li key={index}>
            <span className="text">{task}</span>

        <button className="delete-btn" onClick={() => deleteTask(index)}>
            Delete
        </button>
        <button className="move-up-btn" onClick={() => moveTaskup(index)}>
            Move Up
        </button>
        <button className="move-down-btn" onClick={() => moveTaskdown(index)}>
            Move Down
        </button>
        </li>
                )}

                </ol>

        </>

    )
}
export default TaskApp;