import { Component } from "react";
import Tree from "./components/Tree/tree.jsx";
import { UserContext } from "./contexts/index.js";
import Header from "./components/Header/header.jsx";
import Sidebar from "./components/Header/SideBar/sideBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        fullName: "Test Testovich",
        userImg:
          "https://toppng.com//public/uploads/preview/vu-thi-ha-user-pro-icon-115534024853ae3gswzwd.png",
      },
    };
  }

  render() {
    console.log(UserContext);
    return (
      <UserContext.Provider value={this.state.user}>
        <Tree user={this.state.user} />
        <Header user={this.state.user} />
        <Sidebar />
      </UserContext.Provider>
    );
  }
}

export default App;
