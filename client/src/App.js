import React from "react";
import Todo from "./Todo/Todo";
import useStyles from "./style/style";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Todo />
    </div>
  );
}

export default App;
