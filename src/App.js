import React from "react";
import { Component } from "react/cjs/react.production.min";
import Aloha from "./components/Aloha";

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
      isReverseSortOrder: false,
      AlohaArray: userObj.map((user) => <Aloha key={user.id} user={user} />),
    };
  }

  sortArray = () => {
    const { AlohaArray } = this.state;
    const newAlohaArray = AlohaArray.slice();
    newAlohaArray.reverse();
    this.setState({
      isReverseSortOrder: !this.state.isReverseSortOrder,
      AlohaArray: newAlohaArray,
    });
  };

  render() {
    const { AlohaArray } = this.state;
    return (
      <React.Fragment>
        <h1>
          Сейчас порядок сортировки{" "}
          {this.state.isReverseSortOrder ? "Обратный" : "Прямой"}
        </h1>
        <button onClick={this.sortArray}>Сменить порядок</button>
        {AlohaArray}
      </React.Fragment>
    );
  }
}

export default App;
