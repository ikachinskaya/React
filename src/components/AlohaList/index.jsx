import { Component } from "react";
import Aloha from "../Aloha";

class AlohaList extends Component {
  render() {
    const { users, selectUser } = this.props;
    return (
      <section>
        {" "}
        {users.map((user) => (
          <Aloha key={user.id} user={user} selectUser={selectUser} />
        ))}{" "}
      </section>
    );
  }
}

export default AlohaList;
