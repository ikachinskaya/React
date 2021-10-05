import { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CounterPage from "./pages/CounterPage";
import LoaderPage from "./pages/LoaderPage/loaderPage.jsx";
import NotebooksPage from "./pages/NotebooksPage/notebooksPage.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/loader">Loader</Link>
            </li>
            <li>
              <Link to="/notebooks">Notebooks</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/counter" component={CounterPage} />
          <Route path="/loader" component={LoaderPage} />
          <Route path="/notebooks" component={NotebooksPage} />
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
const NotFound = () => <div>NOT FOUND</div>;

export default App;

//exact -сравнивает путь с точностью
