function Student (props){
    return(
<div>
<h1> Name : {props.name}</h1>
<p>Age : {props.age}</p>
<p>Grade : {props.grade}</p>
</div>
    )
}
export default Student;