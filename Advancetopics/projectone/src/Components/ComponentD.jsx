import { useContext } from "react";
import { userContext } from "./UserContext";

function ComponentD() {

  const user = useContext(userContext);
  return (
    <div className="component-a">
      <h1>Component D</h1>
      <p>{`Hello, ${user}!`}</p>
    </div>
  );
}

export default ComponentD;