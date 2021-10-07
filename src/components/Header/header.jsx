import React, { useState, useContext, useCallback, useEffect } from "react";
import cx from "classnames";
import styles from "./header.module.scss";
import { ThemeContext, UserContext } from "../../contexts/index.js";
import CONSTANS from "../../constans.js";
const { THEMES } = CONSTANS;

const Header = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const { fullName, userImg } = useContext(UserContext);
  const [value, setValue] = useState(1);

  const headerClasses = cx(styles.container, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  const otherTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  //=========================================================

  //const logValue = () => console.log(value);

  //полезно, когда нужно передать колбэк потомкам
  //сохраняет колбэк, который меняется только тогда, когда меняются значения одной из зависимостей
  const logValue = useCallback(() => {
    console.log(value);
  }, [value]);

  //отловить, когда LogValue меняется, отрабатывается при ререндере
  //зависит от logValue
  //побочные эффекты
  useEffect(() => {
    console.log("LOG создался");
  }, [logValue]);

  //зависит он target: { value } , т.е. снаружи не от чего не зависит
  //зависит от того, что прийдет из него
  //в массив завсимостей ничего писать не нужно
  //пишем только то, что пришло снаружи
  const changeValue = useCallback(
    ({ target: { value } }) => setValue(Number(value)),
    []
  );

  useEffect(() => {
    console.log("changeValue создался");
  }, [changeValue]);

  //=========================================================
  const sayHello = useCallback(() => {
    alert(`Hello, ${fullName}`);
  }, [fullName]);

  useEffect(() => {
    console.log("HELLO создался");
  }, [sayHello]);
  //=========================================================

  //setTheme в зависимости не нужно писать
  const changeTheme = useCallback(() => setTheme(otherTheme), [otherTheme]);

  useEffect(() => {
    console.log("changeTheme создался");
  }, [changeTheme]);

  //=========================================================
  return (
    <header className={headerClasses}>
      <h1>Hello, {fullName}</h1>
      <img src={userImg} alt={fullName} />
      <button className={styles.btn} onClick={changeTheme}>
        Switch theme
      </button>
      <button onClick={logValue}>LOG value</button>
      <input type="number" onChange={changeValue} />

      <button onClick={sayHello}>HELLO</button>
    </header>
  );
};

export default Header;
