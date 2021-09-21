import { Component } from "react";
import Aloha from "../Aloha";

class AlohaList extends Component {
  render() {
    const { users } = this.props;
    return (
      <section>
        {" "}
        {users.map((user) => (
          <Aloha key={user.id} user={user} />
        ))}{" "}
      </section>
    );
  }
}

export default AlohaList;
