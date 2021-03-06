import React, { Component } from "react";

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }
  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }
  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    console.log(`Form Submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    });
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
