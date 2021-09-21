import React from "react";
import { Component } from "react/cjs/react.production.min";
import AlohaDashboard from "./components/AlohaDashboard";

const userObj = [
  {
    id: 1,
    name: "Первый",
    surName: "User 1",
  },
  {
    id: 2,
    name: "Второй",
    surName: "User 2",
  },
  {
    id: 3,
    name: "Третий",
    surName: "User 3",
  },
  {
    id: 4,
    name: "Четвертый",
    surName: "User 4",
  },
  {
    id: 5,
    name: "Пятый",
    surName: "User 5",
  },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userObj,
      isReverseSortOrder: false,
    };
  }

  sortArray = () => {
    const { users } = this.state;
    const newUsers = users.slice();
    console.log("sort");
    newUsers.reverse();
    this.setState({
      isReverseSortOrder: !this.state.isReverseSortOrder,
      users: newUsers,
    });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <AlohaDashboard users={users} sortArray={this.sortArray} />;
      </>
    );
  }
}

export default App;
