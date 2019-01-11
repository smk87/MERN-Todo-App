import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

const logo =
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fzapier.cachefly.net%2Fstorage%2Fphotos%2F0e69b69edec094584b2c94288eadf073.png&f=1";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>MERN Stack Todo App</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="localhost" target="_blank">
              <img src={logo} width="30" height="30" alt="locahost" />
            </a>
          </nav>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
