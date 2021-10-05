import React from "react";
import cx from "classnames";
import styles from "./header.module.scss";
import CONSTANS from "../../constans.js";
import { withTheme, withUser } from "../../HOCs/HOCs.jsx";
const { THEMES } = CONSTANS;

const Header = (props) => {
  const { theme, setTheme, user } = props;

  const headerClasses = cx(styles.container, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  const otherTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

  return (
    <header className={headerClasses}>
      <h1>Hello, {user.fullName}</h1>
      <button className={styles.btn} onClick={() => setTheme(otherTheme)}>
        Switch theme
      </button>
    </header>
  );
};

// const HeaderWithTheme = (props) => {
//   return (
//     <ThemeContext.Consumer>
//       {([theme, setTheme]) => {
//         return <Header theme={theme} setTheme={setTheme} />;
//       }}
//     </ThemeContext.Consumer>
//   );
// };

//=====================================================

//=====================================================
//не полностью универсально
// const withContext = (Component, Context) => {
//   return function ComponentWithContext(props) {
//     return (
//       <Context.Consumer>
//         {([theme, setTheme]) => {
//           return <Component theme={theme} setTheme={setTheme} />;
//         }}
//       </Context.Consumer>
//     );
//   };
// };
// const HeaderWithTheme = withContext(Header, ThemeContext);

const HeaderWithTheme = withTheme(Header);

const HeaderWithThemeAndUser = withUser(HeaderWithTheme);

export default HeaderWithThemeAndUser;
