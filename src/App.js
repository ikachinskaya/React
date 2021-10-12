import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUpPage from "pages/SignUpPage/signUpPage";
import SignInForm from "components/SignInForm";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul style={{display:'flex', justifyContent:'space-around', listStyle:'none'}}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/sign-in">SIFN IN</Link>
          </li>
          <li>
            <Link to="/sign-up">SIFN UP</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/sign-in" component={SignInForm} />
        <Route exact path="/sign-up" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
