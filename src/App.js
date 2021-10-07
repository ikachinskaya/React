import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeContext, UserContext } from "./contexts/index.js";
import MainPage from "./pages/MainPage/index.jsx";
import CONSTANS from "./constans.js";
const { THEMES } = CONSTANS;

function App() {
  const [theme, setTheme] = useState(THEMES.DARK);
  const [user, setUser] = useState({
    id: 1,
    fullName: "Test Testovich",
    userImg:
      "https://toppng.com//public/uploads/preview/vu-thi-ha-user-pro-icon-115534024853ae3gswzwd.png",
  });

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <UserContext.Provider value={user}>
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
