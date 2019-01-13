import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Todo = props => {
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsilbe}</td>
    <td>{props.todo.todo_priority}</td>

    <Link to={"/edit/" + props.todo._id}>Edit</Link>
  </tr>;
};

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

  todolist() {
    return this.state.todos.map((currentTodo, index) => {
      return <Todo todo={currentTodo} key={index} />;
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
