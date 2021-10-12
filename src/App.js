import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUpPage from "pages/SignUpPage/signUpPage";
import SignInForm from "components/SignInForm";
import SignInFormPage from "pages/SignInFormPage/signInFormPage";
import Chat from "./components/Chat/chat";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
          }}
        >
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/sign-in">SIGN IN</Link>
          </li>
          <li>
            <Link to="/sign-up">SIGN UP</Link>
          </li>
          <li>
            <Link to="/chat">CHAT</Link>
          </li>
          <li>
            <Link to="/sign-in-form">SIGN IN FORM</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/sign-in" component={SignInForm} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/sign-in-form" component={SignInFormPage} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
