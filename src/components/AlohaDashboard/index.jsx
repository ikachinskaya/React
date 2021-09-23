import { Component } from "react";
import AlohaList from "../AlohaList";
import usersDb from "./../../users";
import SelectedUsersList from "./../SelectedUsersList";

class AlohaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReverseSortOrder: false,
      users: usersDb.map(
        (user) => ({ ...user, isSelected: false })
        // user.isSelected = false;
        // return user;

        //return { ...user, isSelected: false };
      ),
    };
  }

  sortArray = () => {
    const { users } = this.state;
    const newUsers = users.slice();
    newUsers.reverse();
    this.setState({
      isReverseSortOrder: !this.state.isReverseSortOrder,
      users: newUsers,
    });
  };

  selectUser = (selectedUserId) => {
    const { users } = this.state;
    const newUsers = users.slice();
    this.setState({
      ...this.state,
      users: newUsers.map((user) => ({
        ...user,
        isSelected:
          user.id === selectedUserId ? !user.isSelected : user.isSelected,
      })),
    });
  };

  render() {
    const { users, isReverseSortOrder } = this.state;
    return (
      <article>
        <SelectedUsersList users={users} />
        <h1>
          Сейчас порядок сортировки {isReverseSortOrder ? "Обратный" : "Прямой"}
        </h1>
        <button className="btn" onClick={this.sortArray}>
          Сменить порядок
        </button>
        <AlohaList users={users} selectUser={this.selectUser} />
      </article>
    );
  }
}
export default AlohaDashboard;
