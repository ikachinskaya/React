import React, { useContext } from "react";
import cx from "classnames";
import styles from "./header.module.scss";
import { ThemeContext, UserContext } from "../../contexts/index.js";
import CONSTANS from "../../constans.js";
const { THEMES } = CONSTANS;

const Header = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const { fullName, userImg } = useContext(UserContext);
  const headerClasses = cx(styles.container, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  const otherTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

  return (
    <header className={headerClasses}>
      <h1>Hello, {fullName}</h1>
      <img src={userImg} alt={fullName} />
      <button className={styles.btn} onClick={() => setTheme(otherTheme)}>
        Switch theme
      </button>
    </header>
  );
};

export default Header;
