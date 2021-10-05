import React from "react";
import cx from "classnames";
import { UserContext, ThemeContext } from "./../../contexts/index.js";
import styles from "./header.module.scss";
import CONSTANS from "../../constans.js";
const { THEMES } = CONSTANS;

const Header = () => {
  const renderThemeContext = ([theme, setTheme]) => {
    const headerClasses = cx(styles.container, {
      [styles.darkTheme]: theme === THEMES.DARK,
      [styles.lightTheme]: theme === THEMES.LIGHT,
    });

    return (
      <UserContext.Consumer>
        {(user) => {
          const otherTheme =
            theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
          return (
            <header className={headerClasses}>
              <h1>Hello, {user.fullName}</h1>
              <button
                className={styles.btn}
                onClick={() => setTheme(otherTheme)}
              >
                Switch theme
              </button>
            </header>
          );
        }}
      </UserContext.Consumer>
    );
  };
  return <ThemeContext.Consumer>{renderThemeContext}</ThemeContext.Consumer>;
};

export default Header;
