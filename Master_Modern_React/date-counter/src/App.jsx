import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [milliSeconds, setMilliSeconds] = useState();
  console.log();

  function handleDecreaseStep() {
    if (step >= 2) setStep((currStep) => currStep - 1);
  }

  function handleIncreaseStep() {
    setStep((currStep) => currStep + 1);
  }

  function handleDecreaseCount() {
    if (count >= 1) setCount((currCount) => currCount - step);
  }

  function handleIncreaseCount() {
    setCount((currCount) => currCount + step);
  }

  function formatDate(dateObj) {
    return dateObj.toString().split(" ").splice(0, 4).join(" ");
  }

  return (
    <>
      <div className="step-container">
        <button className="decreaseStep" onClick={handleDecreaseStep}>
          -
        </button>
        <span>{`Step: ${step}`}</span>
        <button className="increaseStep" onClick={handleIncreaseStep}>
          +
        </button>
      </div>
      <div className="count-container">
        <button className="decreaseCount" onClick={handleDecreaseCount}>
          -
        </button>
        <span>{`Count: ${count}`}</span>
        <button className="increaseCount" onClick={handleIncreaseCount}>
          +
        </button>
      </div>
      <p className="date">
        {count === 0
          ? `Today is ${formatDate(date)}`
          : count === 1
          ? `${count} day from today is ${formatDate(date)}`
          : `${count} days from today is ${formatDate(date)}`}
        ;
      </p>
    </>
  );
}

export default App;
