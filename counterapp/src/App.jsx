import { useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  const[darkMode,setDarkmode] = useState(false);

return (
  <div className="container">

    <h1>Counter App</h1>

    <h2
      className="count"
      style={{
        color:
          count > 0
            ? "green"
            : count < 0
            ? "red"
            : "gray"
      }}
    >
      {count}
    </h2>

    <button
      className="btn"
      onClick={() => setCount(count + 1)}
    >
      Increase
    </button>

    <button
      className="btn"
      onClick={() => setCount(count - 1)}
    >
      Decrease
    </button>

    <button
      className="btn"
      onClick={() => setCount(0)}
    >
      Reset
    </button>

  </div>
);
  i<button onClick={() => setDarkmode(!darkMode)}>
Darkmode  </button>

}

export default App;
