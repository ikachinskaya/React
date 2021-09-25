import { Component } from "react";
import styles from "./app.module.css" 
import SignInForm from "./components/SignInForm";
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
       
        <button className={styles.btn} onClick={this.toggleVisibility}>HIDE</button>
         {isVisible && <StopWatch />}
        <SignInForm />
      </>
    );
  }
}

export default App;
