import React from "react";
import { useState } from "react/cjs/react.development";

const MouseTracker = (props) => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = (e) => {
    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  //так не делать, ререндерится
  //document.body.addEventListener("mousemove", mouseMoveHandler);

  return (
    <div style={{ height: "100vh" }} onMouseMove={mouseMoveHandler}>
      <p>X: {coordinates.x}</p>
      <p>Y {coordinates.y}</p>
    </div>
  );
};

export default MouseTracker;
