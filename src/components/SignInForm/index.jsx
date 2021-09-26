import { Component } from "react";
import styles from "./signinform.module.css";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      isLoginCorrect: true,
      isPasswordCorrect: true,
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
      [`is${name[0].toUpperCase()}${name.slice(1)}Correct`]:
        !value.includes(" "),
    });
  };

  componentDidUpdate() {
    cx({ [styles.container]: true, test2: false, good: true });
  }
  render() {
    const { login, password, isLoginCorrect, isPasswordCorrect } = this.state;

    // const loginClassesNames = isLoginCorrect
    //   ? styles.correctInput
    //   : styles.inCorrectInput;

    // const passwordClassesNames = isPasswordCorrect
    //   ? styles.correctInput
    //   : styles.inCorrectInput;

    const loginClassesNames = cx({
      [styles.correctInput]: isLoginCorrect,
      [styles.inCorrectInput]: !isLoginCorrect,
      container: true,
      testClass: true,
      badClass: false,
    });
    const passwordClassesNames = cx({
      [styles.correctInput]: isPasswordCorrect,
      [styles.inCorrectInput]: !isPasswordCorrect,
    });

    return (
      <form className={styles.container} onSubmit={this.handleFormSubmit}>
        <input
          className={loginClassesNames}
          onChange={this.handleChange}
          value={login}
          name="login"
          type="text"
          placeholder="login"
        />
        <input
          className={passwordClassesNames}
          onChange={this.handleChange}
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

function cx(stylesObj) {
  // const classTuples = Object.entries(stylesObj);
  // const filteredClassTuples = classTuples.filter(
  //   ([className, boolValue]) => boolValue
  // );
  // const classNamesArray = filteredClassTuples.map(([className]) => className);
  // let classNameString = classNamesArray.join(" ");
  // return classNameString;

  return Object.entries(stylesObj)
    .filter(([className, boolValue]) => boolValue)
    .map(([className]) => className)
    .join(" ");
}
