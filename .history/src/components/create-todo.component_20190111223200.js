import React, { Component } from "react";

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: ""
    };
  }

  render() {
    return (
      <div>
        <p>Welcome to Create Todo Component!</p>
      </div>
    );
  }
}

export default CreateTodo;
