import { useState } from "react";
import ComponentB from "./ComponentB";
import { userContext } from "./UserContext";

function ComponentA() {
  const [user] = useState("Janhvi singh");

  return (
    <div className="component-a">
      <h1>Component A</h1>
      <p>{`Hello, ${user}!`}</p>
      <userContext.Provider value = {user}>
      <ComponentB  user = {user}/>

      </userContext.Provider>
 
    </div>
  );
}

export default ComponentA;
