import React, { Component } from "react";
import DataProvider from "../../components/DataProvider/dataProvider";

class LoaderPage extends Component {
  getUsers = () => {
    return fetch("/users.json").then((res) => res.json());
  };

  renderUsers = (state) => {
    if (state.error) {
      return <h1>{state.error.message}</h1>;
    }
    return (
      <ol>
        {state.data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    );
  };

  getNotebooks = () => {
    return fetch("/notebooks.json").then((res) => res.json());
  };

  renderNotebooks = (state) => {
    if (state.error) {
      return <h1>{state.error.message}</h1>;
    }
    return (
      <ul>
        {state.data.map((notebook) => (
          <li key={notebook.id}>{notebook.name}</li>
        ))}
      </ul>
    );
  };

  getPicture = () => {
    return new Promise((res, rej) => {
      res(
        "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_28/1587661/dogs-age-years-kb-inline-200707.jpg"
      );
    });
  };

  renderPicture = (state) => {
    return (
      <div style={{ width: "400px" }}>
        <img src={state.data} alt="image" style={{ width: "100%" }} />
      </div>
    );
  };

  render() {
    return (
      <div>
        <DataProvider
          loadData={this.getNotebooks}
          render={this.renderNotebooks}
        />
        <DataProvider loadData={this.getUsers} render={this.renderUsers} />
        <DataProvider loadData={this.getPicture} render={this.renderPicture} />
      </div>
    );
  }
}

export default LoaderPage;
