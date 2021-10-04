import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  //вызывается перед рендером, когда получает новые пропсы или состояние.
  //Значение по умолчанию равно true.
  shouldComponentUpdate(nextProps, nextState) {
    //return nextState.value !== this.state.value;
    return nextProps.step === this.props.step;
  }

  increment = () => {
    this.setState({ value: this.state.value + this.props.step });
  };

  decrement = () => {
    this.setState({ value: this.state.value - this.props.step });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <div className={styles.count}>Count: {value}</div>
        <button onClick={this.increment} className={styles.btn}>
          +
        </button>
        <button onClick={this.decrement} className={styles.btn}>
          -
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number.isRequired,
};
export default Counter;
