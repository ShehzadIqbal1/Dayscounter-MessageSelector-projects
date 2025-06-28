// Message selector app

// useState messages app
// import { useState } from "react";
// import "./App.css";
// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest new income 🤑",
// ];
// function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) setStep((s)=> s - 1);
//   }

//   function handleNext() {
//     if (step < 3) setStep((s)=> s + 1);
//   }
//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen(!isOpen)}>
//         {" "}
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step === 1 ? "active" : ""}>1</div>
//             <div className={step === 2 ? "active" : ""}>2</div>
//             <div className={step === 3 ? "active" : ""}>3</div>
//           </div>

//           <p className="message">
//             Step {step}:{messages[step - 1]}
//           </p>

//           <div className="buttons">
//             <button onClick={handlePrevious}>Previous</button>
//             <button onClick={handleNext}>Next</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

//Week days counter app

import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("2025/03/28");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  console.log(count, step)

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>

      <p>
        <span>
          {" "}
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}{" "}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1  ? (
        <div>
      <button onClick={handleReset}>Reset</button>
      </div>): null}
    </div>
  );
}

export default App;
