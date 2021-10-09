// import { useState, useEffect } from "react";

// function useClicker() {
//   const [click, setClick] = useState(0);

//   const clickHandler = () => {
//     setClick(click + 1);
//   };
//   useEffect(() => {
//     window.addEventListener("click", clickHandler);//слушателя нужно чистить
//     return  () =>{
//       window.removeEventListener("click", clickHandler);
//     };
//   }, [clickHandler]);
//   return click;
// }

// export default useClicker;
//====================================================================
//2 вариант
// import { useState, useEffect } from "react";

// function useClicker() {
//   const [click, setClick] = useState(0);

//   const clickHandler = () => {
//     setClick((prevClick) => prevClick + 1);
//   };
//   useEffect(() => {
//     window.addEventListener("click", clickHandler);

//     return function () {
//       window.removeEventListener("click", clickHandler);
//     };
//   }, []);
//   return click;
// }

// export default useClicker;
//====================================================================
//3 вариант
import { useState, useEffect } from "react";

function useClicker() {
  const [click, setClick] = useState(0);

  useEffect(() => {
    const clickHandler = () => {
      setClick(click + 1);
    };
    window.addEventListener("click", clickHandler);

    return function () {
      window.removeEventListener("click", clickHandler);
    };
  }, [click]);
  return click;
}

export default useClicker;
