import { useState } from "react";
import useStore from "./store/store";
function App() {
  // if you use destructuring this component will re-render when everything in store updates. you should use the long syntax
  const { bears, increasePopulation } = useStore();
  console.log(process.env.NODE_ENV);

  return (
    <div className="grid place-content-center h-screen">
      <div>{bears} bears around here</div>
      <button
        className="bg-green-500 p-2 rounded-sm text-white"
        onClick={increasePopulation}
      >
        Add Bear
      </button>
    </div>
  );
}

export default App;
