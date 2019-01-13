import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/todos/");
  }

  render() {
    return (
      <div>
        <p>Welcome to Todos List Component!</p>
      </div>
    );
  }
}

export default TodosList;
