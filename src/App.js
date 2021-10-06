import React, { useState } from "react";
import MouseTracker from "./components/MouseTracker/mouseTracker.jsx";

function App() {
  //state классового компонента
  // this.state = {
  //   theme: THEMES.DARK,
  //   user: {
  //     id: 1,
  //     fullName: 'User Userovich',
  //     userImg:
  //       'https://www.ikea.com/kr/en/images/products/jaettelik-soft-toy-dinosaur-dinosaur-velociraptor__0814802_pe772713_s5.jpg?f=undefined',
  //   },
  // };

  //state функционального компонента
  const [theme, setTheme] = useState("THEMES.DARK");

  const [user, setUser] = useState({
    id: 1,
    fullName: "User Userovich",
    userImg:
      "https://www.ikea.com/kr/en/images/products/jaettelik-soft-toy-dinosaur-dinosaur-velociraptor__0814802_pe772713_s5.jpg?f=undefined",
  });

  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>SWITCH</button>
      {isVisible && <MouseTracker />}
    </>
  );
}

export default App;
