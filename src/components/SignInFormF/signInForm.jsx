import React, { useState } from "react";
import styles from "./SignInForm.module.scss";
import { SIGN_IN_SHEMA } from "utils/validationSchemas";

const goodSubmit = {
  email: "test@gmail.com",
  password: "1Qe#0000",
  remember: "remember",
};

const badSubmit = {
  email: "12152",
  password: "@",
  remember: "remember",
};

const SignInForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembering, setIsRemembering] = useState(false);

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };
  const handleRemember = ({ target: { value } }) => {
    setIsRemembering(!isRemembering);
  };
  // console.log(SIGN_IN_SHEMA.validateSync(goodSubmit));
  // console.log(SIGN_IN_SHEMA.validateSync(badSubmit));

  try {
    console.log(SIGN_IN_SHEMA.isValidSync(goodSubmit));
    console.log(SIGN_IN_SHEMA.isValidSync(badSubmit));
  } catch (error) {
    console.log(error);
  }
  return (
    <form className={styles.container}>
      <input
        name="email"
        value={email}
        onChange={handleEmail}
        placeholder="Email"
      />
      <input
        name="password"
        value={password}
        onChange={handlePassword}
        placeholder="Password"
      />
      <label className={styles.remember}>
        <input
          className={styles.rememberCheckbox}
          type="checkbox"
          name="remember"
          value={isRemembering ? "remember" : ""}
          checked={isRemembering}
          onChange={handleRemember}
        />
        <span> Запомнить меня</span>
      </label>

      <button>Login</button>
    </form>
  );
};

export default SignInForm;
