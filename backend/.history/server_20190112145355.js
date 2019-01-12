const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require("./todo.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb://localhost:27017/todos",
  { useNewUrlParser: true }
);

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully.");
});

todoRoutes.route("/").get((req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRoutes.route("/:id").get((req, res) => {
  let id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

todoRoutes.route("/add").post((req, res) => {
  let todo = new Todo(req.body);
  todo.save().then(todo => {
    res.status(200);
  });
});

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
});
