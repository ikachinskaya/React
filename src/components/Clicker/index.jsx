import { Component } from "react";
import Image from "./../Image";
import styles from "./clicker.module.css";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterClicker: 0,
    };
  }
  clickButton = () => {
    let { counterClicker } = this.state;
    this.setState({ counterClicker: ++counterClicker });
  };

  render() {
    let { counterClicker } = this.state;
    let button = (
      <button className={styles.btn} onClick={this.clickButton}>
        Click me
      </button>
    );
    const img = <Image src="http://localhost:3000/favicon.ico" alt="favicon" />;
    return (
      <div>
        {counterClicker < 10 ? button : img}

        <div className={styles.clickerText}>
          Pressed {counterClicker} times{" "}
        </div>
      </div>
    );
  }
}
export default Clicker;
