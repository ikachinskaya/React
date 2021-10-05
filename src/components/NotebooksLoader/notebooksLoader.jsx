import React, { Component } from "react";

class Notebooksloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notebooks: [],
      isLoading: false,
      error: null,
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch("/notebooks.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ notebooks: data, isLoading: false });
      })
      .catch((error) => {
        this.setState({
          error,
          isLoading: false,
        });
      });
  }

  render() {
    const { notebooks, isLoading, error } = this.state; 
    if (isLoading) {
      return <div>ISLOADING...</div>;
    }
    if (error) {
      return <div>{error.massage}</div>;
    }
    return (
      <ul>
        {notebooks.map((notebook) => (
          <li key={notebook.id}>{notebook.name}</li>
        ))}
      </ul>
    );
  }
}

export default Notebooksloader;
