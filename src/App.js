import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/users/42")
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <p> { !data ? "Loading..." : data.firstName }</p>
    </div>
  );
}

export default App;
