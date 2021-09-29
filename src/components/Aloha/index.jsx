import { Component } from "react";
import "./aloha.css";
import PropTypes from "prop-types";

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
    const {
      user: { id, name, surName, isSelected },
      selectUser,
    } = this.props;
    const { isGreeting } = this.state;
    const fullName = `${name} ${surName}`.trim();
    const styles = {
      color: isSelected ? "green" : "black",
      border: isSelected ? "2px solid black" : "2px solid transparent",
    };
    return (
      <section style={styles}>
        <h1>
          {isGreeting ? "Привет" : "Пока"}, {fullName}!
        </h1>
        {isGreeting ? (
          <button className="btn" onClick={this.switchState}>
            Нажми, чтобы изменить состояние
          </button>
        ) : null}
        <button className="btn" onClick={() => selectUser(id)}>
          Выбрать
        </button>
      </section>
    );
  }
}

export const userObj = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
Aloha.propTypes = {
  selectUser: PropTypes.func.isRequired,
  user: PropTypes.shape(userObj).isRequired,
};
export default Aloha;
