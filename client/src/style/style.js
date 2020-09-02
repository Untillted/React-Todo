import { createUseStyles } from "react-jss";

const ff = {
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 400,
};

const useStyles = createUseStyles({
  // root ===================
  root: {
    boxSizing: "border-box",
    width: "28%",
    margin: "1em auto",
    ...ff,
    "& h1": {
      textAlign: "center",
    },
    "& ul": {
      listStyle: "none",
      padding: "0",
    },
    "& p": {
      margin: 0,
    },
    "& .button": {
      ...ff,
      float: "right",
      marginLeft: ".5em",
      backgroundColor: "#F4F4F4",
      border: "none",
      padding: ".5em",
    },
    "& *": {},
    "& .todo-warning": {
      textAlign: "center",
      marginTop: "1em",
    },
  },
  // form ====================
  form: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0 3px #000",
    padding: "1em",
    "& p": {
      textAlign: "center",
      marginBottom: ".5em",
      color: "red",
    },
    "& textarea": {
      ...ff,
      fontSize: "1em",

      height: "5em",
      border: 0,
      resize: "none",
    },
    "& .form-input": {
      marginBottom: ".5em",
      padding: ".5em",
    },
    "& ._priority": {
      border: "2px solid #F4F4F4",
    },
    "& .button": {
      margin: 0,
    },
  },
  // task ========================
  task: {
    boxShadow: "0 0 3px #000",
    padding: "1em",
    marginBottom: "1em",
    "& p": {
      marginBottom: "1em",
    },
    "& span": {
      verticalAlign: "middle",
    },
  },
});

export default useStyles;
