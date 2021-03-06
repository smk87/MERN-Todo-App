import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marrginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.todolist()}</tbody>
        </table>
      </div>
    );
  }
}

export default TodosList;
