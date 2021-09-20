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
    const { user } = this.props;
    const { isGreeting } = this.state;
    return (
      <section>
        <h1>
          {isGreeting ? "Привет" : "Пока"}, {user.name} {user.surName}!
        </h1>
        {isGreeting ? (
          <button className="btn" onClick={this.switchState}>
            {" "}
            Нажми, чтобы изменить состояние{" "}
          </button>
        ) : null}
      </section>
    );
  }
}
export default Aloha;
