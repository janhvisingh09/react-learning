import './index.css';

function button(){
const handleClick = (e)=> e.target.textContent = "stop clicking me";
return (<button  className="btn btn-primary" onClick={handleClick}>Click me</button>)
}
export default button;