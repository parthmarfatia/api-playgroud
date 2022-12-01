import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [val, setVal] = useState("pending");

  useEffect(() => {
    let v = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Its working");
      }, 5000);
    });
    v.then((v) => setVal(v));
  }, []);

  return (
    <div>
      <div>{val}</div>
    </div>
  );
}

export default App;
