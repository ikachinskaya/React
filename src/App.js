import { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CounterPage from "./pages/CounterPage";
import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="link">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/counter" className="link">
                Counter
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/counter" component={CounterPage} />
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
const NotFound = () => <div>NOT FOUND</div>;

export default App;

//exact -сравнивает путь с точностью
