import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  const fetchCounter = async () => {
    try {
      const response = await axios.get("https://countsh.vercel.app/");
      setCount(response.data.count);
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };
  fetchCounter();
}, []);

const handleIncrement = async () => {
  try {
    const newCount = count + 1;
    await axios.post("https://countsh.vercel.app/", { count: newCount });
    setCount(newCount);
  } catch (error) {
    console.error("Error updating count:", error);
  }
};

const handleDecrement = async () => {
  try {
    const newCount = count - 1;
    await axios.post("https://countsh.vercel.app/", { count: newCount });
    setCount(newCount);
  } catch (error) {
    console.error("Error updating count:", error);
  }
};

const handleReset = async () => {
  try {
    const newCount = 0;
    await axios.post("https://countsh.vercel.app/", { count: newCount });
    setCount(newCount);
  } catch (error) {
    console.error("Error resetting count:", error);
  }
};


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
