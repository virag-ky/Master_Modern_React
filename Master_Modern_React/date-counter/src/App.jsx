import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState();
  let currDate = new Date();
  let hoursInMilliSeconds;
  let newDate;

  function handleDecreaseStep() {
    if (step >= 2) setStep((currStep) => currStep - 1);
  }

  function handleIncreaseStep() {
    setStep((currStep) => currStep + 1);
  }

  function handleDecreaseCount() {
    if (count < step) {
      setCount(0);
      setDate(() => formatDate(new Date()));
    } else {
      hoursInMilliSeconds = (count - step) * 24 * 60 * 60 * 1000;
      newDate = new Date(currDate.getTime() + hoursInMilliSeconds);
      setCount((currCount) => currCount - step);
      setDate(() => formatDate(newDate));
    }
  }

  function handleIncreaseCount() {
    hoursInMilliSeconds = (count + step) * 24 * 60 * 60 * 1000;
    newDate = new Date(currDate.getTime() + hoursInMilliSeconds);
    setCount((currCount) => currCount + step);
    setDate(() => formatDate(newDate));
  }

  function formatDate(dateObj) {
    return dateObj.toString().split(" ").splice(0, 4).join(" ");
  }

  return (
    <div className="date-counter">
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
          ? `Today is ${formatDate(currDate)}`
          : count === 1
          ? `${count} day from today is ${date}`
          : `${count} days from today is ${date}`}
        ;
      </p>
    </div>
  );
}

export default App;
