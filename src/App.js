import { Component } from "react";
import StopWatch from "./components/StopWatch";
import SignInForm from "./components/SignInForm";

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
        <SignInForm />
      </>
    );
  }
}

export default App;
