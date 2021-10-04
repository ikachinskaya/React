import { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Aloha from "./components/Aloha";
import Clicker from "./components/Clicker";
import SignInForm from "./components/SignInForm";
import StopWatch from "./components/StopWatch";
import MainPage from "./pages/MainPage";
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
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={MainPage}>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
        <h1>My Projects</h1>

        <nav>
          <ul>
            <li>
              <Link to="/components/Aloha" className="link">
                Aloha
              </Link>
            </li>
            <li>
              <Link to="/components/Clicker" className="link">
                Clicker
              </Link>
            </li>
            <li>
              <Link to="/components/SignInForm" className="link">
                SignInForm
              </Link>
            </li>
            <li>
              <Link to="/components/StopWatch" className="link">
                StopWatch
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/components/Aloha">
            <Aloha />
          </Route>
          <Route path="/components/Clicker">
            <Clicker />
          </Route>
          <Route path="/components/SignInForm">
            <SignInForm />
          </Route>
          <Route path="/components/StopWatch">
            <StopWatch />
          </Route>

          <Route path="/" component={MainPage}>
            <StopWatch />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contacts = () => <div>Contacts</div>;

const NotFound = () => <div>NOT FOUND</div>;

export default App;

//exact -сравнивает путь с точностью
