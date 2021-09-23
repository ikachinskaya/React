import { Component } from "react";

class SelectedUsersList extends Component {
  render() {
    const { users } = this.props;
    //const selectedUsers = users.filter((user) => user.isSelected);
    // console.log(users.filter((user) => user.isSelected));
    return (
      <ul>
        {/* {users.map((user) =>
            user.isSelected ? (
              <li key={user.id}>
                {user.name} {user.surName}
              </li>
            ) : null
          )} */}

        {/* {users.filter((user) => user.isSelected).map((user) => (
            <li key={user.id}>
              {user.name} {user.surName}
            </li>
          ))}  */}

        {users.map((user) => {
          return (
            user.isSelected && (
              <li key={user.id}>
                {user.name} {user.surName}
              </li>
            )
          );
        })}
      </ul>
    );
  }
}

export default SelectedUsersList;
