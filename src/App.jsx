import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count,
    setCount] = useState(0);

  return (
    <>
      <h1>First React Project with Mobile</h1>
      <div className="card">
        <p className="read-the-docs">
          count is {count}
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Add
        </button>
        <br />
        <br />
        <button onClick={() => setCount((count) => count - 1)}>
          Subtract
        </button>
      </div>
    </>
  )
}

export default App