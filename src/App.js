import { Component } from "react";
import styles from "./app.module.css";
import SignInForm from "./components/SignInForm";
import StopWatch from "./components/StopWatch";
import Image from "./components/Image";
import Clicker from "./components/Clicker";
import AlohaDashboard from "./components/AlohaDashboard/";

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
        <button className={styles.btn} onClick={this.toggleVisibility}>
          HIDE
        </button>
        {isVisible && <StopWatch />}
        <SignInForm />
        <Image src="https://krasivosti.pro/uploads/posts/2021-04/1617723761_25-p-sobaka-oboi-labrador-korotkosherstnii-32.jpg" />
        <Clicker />
        <AlohaDashboard />
      </>
    );
  }
}

export default App;
