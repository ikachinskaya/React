import { Component } from "react";
import { UserContext } from "./contexts/index.js";
import Header from "./components/Header/header.jsx";
import Sidebar from "./components/Header/SideBar/sideBar.jsx";
import { ThemeContext } from "./contexts/index.js";
import CONSTANS from "./constans.js";
const { THEMES } = CONSTANS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.DARK,
      user: {
        id: 1,
        fullName: "Test Testovich",
        userImg:
          "https://toppng.com//public/uploads/preview/vu-thi-ha-user-pro-icon-115534024853ae3gswzwd.png",
      },
    };
  }

  setTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    const { theme, user } = this.state;
    return (
      <ThemeContext.Provider value={[theme, this.setTheme]}>
        <UserContext.Provider value={user}>
          <Header user={user} />
          <Sidebar />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
