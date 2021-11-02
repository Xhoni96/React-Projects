import useStore from "../../store/store";

const ZustandExample = () => {
  // if you use destructuring this component will re-render when everything in store updates. you should use the long syntax
  const { bears, increasePopulation, removeAllBears } = useStore();
  return (
    <div className="grid place-content-center h-screen text-white">
      <div className="text-black">{bears} bears around here</div>
      <button
        type="button"
        className="bg-green-500 p-2 rounded-sm"
        onClick={increasePopulation}
      >
        Add Bear
      </button>
      <button
        type="button"
        className="bg-red-500 p-2 rounded-sm"
        onClick={removeAllBears}
      >
        Remove All Bears
      </button>
    </div>
  );
};

export default ZustandExample;
