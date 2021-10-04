import React, { Component } from "react";
import Clicker from "../../components/Clicker";

class MainPage extends Component {
  render() {
    return (
      <>
        <header>header</header>
        <main>
          <Clicker />
        </main>
        <footer>footer</footer>
      </>
    );
  }
}

export default MainPage;
