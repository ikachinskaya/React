import { Component } from "react";
import AlohaList from "../AlohaList";

class AlohaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReverseSortOrder: false,
    };
  }

  render() {
    const { users, sortArray } = this.props;
    return (
      <article>
        <h1>
          Сейчас порядок сортировки{" "}
          {this.state.isReverseSortOrder ? "Обратный" : "Прямой"}
        </h1>
        <button onClick={sortArray}>Сменить порядок</button>
        <AlohaList users={users} />
      </article>
    );
  }
}

export default AlohaDashboard;
