import { Component } from "react";
import ImageWrapper from "./components/ImageWrapper/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  toggleVisibility = () => {
    const { isVisible } = this.state;
    this.setState({
      isVisible: !isVisible,
    });
  };

  render() {
    return (
      <>
        <ImageWrapper style={{maxWidth:"40px"}}>
          <img
            src="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg"
            alt="Labrador"
            onClick={()=>alert('Hello!')}
          ></img>
        </ImageWrapper>
      </>
    );
  }
}

export default App;
