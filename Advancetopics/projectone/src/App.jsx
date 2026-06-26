// // useEffect is used to handle side effects like API calls, DOM updates, timers, and subscriptions.
// // Runs after every render
// useEffect(() => {
// }, []);

// // Runs only once after the initial render
// useEffect(() => {
// }, []);

// // Runs when specified dependencies change
// useEffect(() => {
// }, [prop, state]);

import Hooks from "./Components/hooks.jsx";
import ComponentA from "./Components/ComponentA.jsx";
// import ComponentB from "./Components/ComponentB.jsx";
// import ComponentC from "./Components/ComponentC.jsx";
// import ComponentD from "./Components/ComponentD.jsx";



function App() {
  return (
    <>
      <Hooks />
        <ComponentA />
  </>
  );
}

export default App;
