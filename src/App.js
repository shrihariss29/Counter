import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch the initial count from the server
    const fetchCounter = async () => {
      const response = await axios.get("http://localhost:5000/api/counter");
      setCount(response.data.count);
    };
    fetchCounter();
  }, []);

  const handleIncrement = async () => {
    const newCount = count + 1;
    await axios.post("https://countsh.vercel.app/", { count: newCount });
    setCount(newCount);
  };

  const handleDecrement = async () => {
    const newCount = count - 1;
    await axios.post("https://countsh.vercel.app/", { count: newCount });
    setCount(newCount);
  };

  const handleReset = async() => {
    const newCount = 0;
    await axios.post("https://countsh.vercel.app/", { count: newCount });
    setCount(newCount);
  }

  return (
    <div className="fulldisp">
      <h1 className="text">Counter: {count}</h1>
      <div className="buttonflex">
      <button className="btn btn-success" onClick={handleIncrement}>+</button>
      <button className="btn btn-danger" onClick={handleDecrement}>-</button>
      </div>
      <button className="btn btn-primary" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
