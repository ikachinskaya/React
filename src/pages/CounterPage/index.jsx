import React, { Component } from "react";
import Counter from "./../../components/Counter/counter.jsx";
class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ step: Number(value) });
  };

  render() {
    const { step } = this.state;
    return (
      <>
        <label>
          STEP: {step}
          <input
            type="range"
            min="1"
            max="50"
            onChange={this.handleChange}
            value={step}
          />
        </label>

        <Counter step={step} />
      </>
    );
  }
}

export default CounterPage;
