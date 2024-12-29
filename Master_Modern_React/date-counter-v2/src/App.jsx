import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  let currDate = new Date();

  function formatDate(dateObj) {
    return dateObj.toString().split(" ").splice(0, 4).join(" ");
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="date-counter">
      <div className="step-container">
        <input
          type="range"
          name=""
          id=""
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{`Step: ${step}`}</span>
      </div>
      <div className="count-container">
        <button
          className="decreaseCount"
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          className="increaseCount"
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>
      <p className="date">
        {count === 0
          ? `Today is ${formatDate(currDate)}`
          : count === 1
          ? `${count} day from today is ${formatDate(currDate)}`
          : `${count} days from today is ${formatDate(currDate)}`}
        ;
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
