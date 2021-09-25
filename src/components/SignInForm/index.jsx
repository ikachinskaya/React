import { Component } from "react";
import styles from "./signinform.module.css";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.setState({
      login: "",
      password: "",
    });
  };

  handleLoginChange = (e) => {
    this.setState({
      login: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { login, password } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleFormSubmit}>
        <input
          onChange={this.handleLoginChange}
          value={login}
          name="login"
          type="text"
          placeholder="login"
        />
        <input
          onChange={this.handlePasswordChange}
          value={password}
          name="password"
          type="password"
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignInForm;
