import { Component } from "react";
import List from "./components/List";
import Grid from "./components/Grid/";
import Row from "./components/Grid/Row";
import Col from "./components/Grid/Col";
import FlexContainer from "./components/FlexContainer/";
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
        <List>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </List>

        <Grid>
          <Row>
            <Col>1</Col>
            <Col>2</Col>
            <Col>3</Col>
            <Col>4</Col>
          </Row>
        </Grid>

        <FlexContainer
          justifyContainer="center"
          alignItems="flex-end"
          column
          reverse
        >
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
        </FlexContainer>
      </>
    );
  }
}

export default App;
