import { Component } from "react";
import CounterWithHooks from "./components/CounterWithHooks/counter.jsx";
import MouseTracker from "./components/MouseTracker/mouseTracker.jsx";

class App extends Component {
  render() {
    return (
      <>       
        <CounterWithHooks />
        <MouseTracker />
      </>
    );
  }
}

export default App;
