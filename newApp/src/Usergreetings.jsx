import './Usergreetings.css';

function Usergreetings (props){
    const welcomeMessage = <h1 className="welcomeMessage"> Welcome back , {props.name}</h1>;
    const loginMessage = <h1 className="loginMessage">Pls log in to continue</h1>;
    return(props.isLoggedin ? welcomeMessage : loginMessage);
}
export default Usergreetings;