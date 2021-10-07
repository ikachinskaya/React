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

  const changeValue = ({ target: { value } }) => setValue(Number(value));
  //=========================================================
  const sayHello = useCallback(() => {
    alert(`Hello, ${fullName}`);
  }, [fullName]);

  useEffect(() => {
    console.log("HELLO создался");
  }, [sayHello]);
  //=========================================================

  return (
    <header className={headerClasses}>
      <h1>Hello, {fullName}</h1>
      <img src={userImg} alt={fullName} />
      <button className={styles.btn} onClick={() => setTheme(otherTheme)}>
        Switch theme
      </button>
      <button onClick={logValue}>LOG value</button>
      <input type="number" onChange={changeValue} />

      <button onClick={sayHello}>HELLO</button>
    </header>
  );
};

export default Header;
