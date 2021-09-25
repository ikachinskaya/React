import { Component } from "react";
import StopWatch from "./components/StopWatch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  toggleVisibility = () => {
    const { isVisible } = this.state;
    this.setState({
      isVisible: !isVisible,
    });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <>
        {isVisible && <StopWatch />}
        <button onClick={this.toggleVisibility}>HIDE</button>
      </>
    );
  }
}

export default App;
