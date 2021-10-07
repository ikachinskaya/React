import React, { useState, useContext, useMemo } from "react";
import cx from "classnames";
import styles from "./header.module.scss";
import { ThemeContext, UserContext } from "../../contexts/index.js";
import CONSTANS from "../../constans.js";
const { THEMES } = CONSTANS;

function computeValue(number) {
  let i = 0;
  for (let j = 0; j < 1_000_000_000; j++) {
    i++;
  }
  return number ** 2;
}

const Header = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const { fullName, userImg } = useContext(UserContext);
  const [value, setValue] = useState(15);

  const headerClasses = cx(styles.container, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  const otherTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  //=========================================================

  const changeValue = ({ target: { value } }) => setValue(Number(value));

  const changeTheme = (e) => setTheme(otherTheme);

  //const newValue = computeValue(value);

  //useMemo так же, как useCallback,
  //только useCallback для функций
  //useMemo для любых значений
  const newValue = useMemo(() => {
    return computeValue(value);
  }, [value]);
  //=========================================================
  return (
    <header className={headerClasses}>
      <h1>{newValue}</h1>
      <img src={userImg} alt={fullName} />
      <button className={styles.btn} onClick={changeTheme}>
        Switch theme
      </button>

      <input type="number" onChange={changeValue} />
    </header>
  );
};

export default Header;
