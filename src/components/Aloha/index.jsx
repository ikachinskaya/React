import { Component } from "react";
import "./aloha.css";

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
    };

    //установили контекст выполнения для switchState
    //если возможно, то использовать =>, т.к. у => нет this, она берет его у родителя
    //this.switchState = this.switchState.bind(this);
  }
  switchState = () => {
    const { isGreeting } = this.state;
    this.setState({
      isGreeting: !isGreeting,
    });
    // const switchedGreeting = !isGreeting;
    // const newState = {
    //   isGreeting: switchedGreeting,
    // };
    // this.setState(newState);
  };
  render() {
    const { name } = this.props;
    const { isGreeting } = this.state;
    return (
      <div>
        <h1>
          {isGreeting ? "Hello" : "Bye"}, {name}!
        </h1>
        <button className="btn" onClick={this.switchState}>
          Click to change state{" "}
        </button>
      </div>
    );
  }
}
export default Aloha;
