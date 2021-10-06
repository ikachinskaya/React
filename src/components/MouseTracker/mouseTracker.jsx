import React, { useState, useEffect } from "react";

const MouseTracker = (props) => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  //создавать разные useState
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  //==============================================

  const mouseMoveHandler = (e) => {
    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  //==============================================

  const clickHandler = () =>
    //если новое состояни вычисляется с использованием предыдущего, необходимо передавать функцию
    setCounter(function (prevCounter) {
      return prevCounter + step;
    });

  //запустится после каждого завершенного рендера
  //1 аргумент - функция
  //2 аргумент - массив значений, от которых зависит эффект,
  //  всё, что используется внутри useEffect, которые могут измениться
  //  если они меняются, то эффект запустится заново

  //==============================================

  //effects возвращает функцию очистки
  useEffect(
    function effects() {
      console.log("useEffect");
      //добавили слушателя, работает 1 раз
      //нужно убрать, когда компонент размонтируется
      document.body.addEventListener("click", clickHandler);

      //функция очистки (clearEffects===componentWillUnmount)
      return function clearEffects() {
        console.log("clearEffects");
        document.body.removeEventListener("click", clickHandler);
      };
    },
    [step]
  );

  //==============================================

  //так не делать, ререндерится
  //document.body.addEventListener("mousemove", mouseMoveHandler);

  //==============================================

  const handleChange = ({ target: { value } }) => {
    setStep(Number(value));
  };

  //==============================================
  return (
    <div style={{ height: "100vh" }} onMouseMove={mouseMoveHandler}>
      <p>X: {coordinates.x}</p>
      <p>Y {coordinates.y}</p>
      <p>Count: {counter}</p>
      <input value={step} onChange={handleChange}></input>
    </div>
  );
};

export default MouseTracker;
