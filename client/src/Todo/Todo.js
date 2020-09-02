import React from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";
import useStyles from "../style/style";

const Todo = function () {
  const classes = useStyles();

  return (
    <div className="todo">
      <h1>TODO APP</h1>
      <TodoForm classes={classes} />
      <Todolist />
    </div>
  );
};

export default Todo;
