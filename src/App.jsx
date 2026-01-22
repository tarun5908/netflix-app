import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-red-600 bold text-2xl text-center p-4">
        Hello, Welcome to Netflix App
      </div>
    </>
  );
}

export default App;
