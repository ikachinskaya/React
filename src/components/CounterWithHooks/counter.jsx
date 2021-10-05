import { useState } from "react";

const Counter = () => {
  const [countValue, setcountValue] = useState(0);
  const [step, setStep] = useState(1);

  const clickHandler = () => {
    setcountValue(countValue + step);
  };

  const changeHandler = ({ target: { value } }) => {
    setStep(Number(value));
  };

  console.log("hello");
  return (
    <div>
      <p>Count: {countValue}</p>
      <input onChange={changeHandler} value={step} />
      <button onClick={clickHandler}>add</button>
    </div>
  );
};

export default Counter;
