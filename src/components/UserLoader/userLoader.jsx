import React, { Component } from "react";
import { getUsers } from "./../../api";

class Userloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isError: false,
      isLoading: true,
      currentPage: 1,
    };
  }

  load = () => {
    const { currentPage } = this.state;
    //getUsers({ currentPage, seed: "abc", results: 10 })
    getUsers({ page: currentPage })
      .then((data) => {
        this.setState({
          users: data.results,
        });
      })
      .catch((error) => {
        this.setState({
          isError: true,
        });
      })
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  };

  //Запускается при монтировании, после того, как компонент отрендерился
  componentDidMount() {
    this.load();
  }

  //Вызывается сразу после обновления компонента
  //Необходимо вызывать с каким-то условием
  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.load();
    }
  }

  prevPage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  };

  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage - 1,
    });
  };

  render() {
    const { users, isError, IsLoading } = this.state;
    const userList = users.map((user) => (
      <div key={user.login.uuid}>{user.name.first}</div>
    ));
    return (
      <div>
        <h1>USER LIST</h1>
        <button onClick={this.nextPage}>Прошлая страница</button>
        <button onClick={this.prevPage}>Следующая страница</button>
        {isError ? <h1>Error</h1> : null}
        {IsLoading ? <h1>Loading</h1> : null}
        {users.length ? userList : null}
      </div>
    );
  }
}

export default Userloader;
