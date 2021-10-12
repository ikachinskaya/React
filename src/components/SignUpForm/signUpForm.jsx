import React, { useReducer } from "react";
import reducer from "./reducer";
import styles from "./signUpForm.module.scss";

const initialState = {
  nickName: "",
  firstName: "",
  lastName: "",
  birthDay: "",
  email: "",
  password: "",
};

//useReducer - хук
//reducer - хранилище логики, генерирует новое состояние
//initialState  - объект начального состояния

//state - состояние
//dispatch - функция, которая говорит, как меянть состояние, отправляет action
const SignUpForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = ({ target: { value, name } }) => {
    //объект action содержит информацию о новом событии
    const action = { value, name };
    //при вызове dispatch, React запускает reduce
    //при вызове dispatch, action отправляется в reducer
    dispatch(action);
  };

  return (
    <form className={styles.form}>
      <input
        name="nickName"
        value={state.nickName}
        placeholder="NickName"
        onChange={handleChange}
      ></input>
      <input
        name="firstName"
        value={state.firstName}
        placeholder="FirstName"
        onChange={handleChange}
      ></input>
      <input
        name="lastName"
        value={state.lastName}
        placeholder="LastName"
        onChange={handleChange}
      ></input>
      <input
        name="birthDay"
        value={state.birthDay}
        placeholder="BirthDay"
        onChange={handleChange}
      ></input>
      <input
        name="email"
        value={state.email}
        placeholder="E-mail"
        onChange={handleChange}
      ></input>
      <input
        name="password"
        value={state.password}
        placeholder="Password"
        onChange={handleChange}
      ></input>
      <button>SUBMIT FORM</button>
    </form>
  );
};

export default SignUpForm;
