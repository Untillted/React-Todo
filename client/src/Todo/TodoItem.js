import React from "react";
import useStyles from "../style/style";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTask, taskPriorityUp, taskPriorityDown } from "../redux/actions";

const Todoitem = ({ tasks, deleteTask, taskPriorityUp, taskPriorityDown }) => {
  const classes = useStyles();
  return (
    <ul>
      {tasks.length ? (
        tasks.map((task, i) => {
          return (
            <li key={i} className={classes.task}>
              <p>{task.task}</p>
              <p>{task.executor}</p>
              <span>{task.priority}</span>
              {tasks[0] !== task && (
                <button
                  onClick={() => {
                    taskPriorityUp(task);
                  }}
                  className="button"
                >
                  Повысить приоритет
                </button>
              )}

              {tasks[tasks.length - 1] !== task && (
                <button
                  onClick={() => {
                    taskPriorityDown(task);
                  }}
                  className="button"
                >
                  Понизить приоритет
                </button>
              )}

              <button
                className="button"
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                Удалить
              </button>
            </li>
          );
        })
      ) : (
        <p className="todo-warning">Задач нет!</p>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.data.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskPriorityUp: (task) => {
      dispatch(taskPriorityUp(task));
    },
    taskPriorityDown: (task) => {
      dispatch(taskPriorityDown(task));
    },
    deleteTask: (id) => {
      dispatch(deleteTask(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todoitem);

Todoitem.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func,
  taskPriorityUp: PropTypes.func,
  taskPriorityDown: PropTypes.func,
};
