import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      executor: "Не выбрано",
      priority: "",
      warning: false,
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { task, priority, executor } = this.state;

    if (task.trim() && priority.trim() && executor !== "Не выбрано") {
      const newTask = {
        id: Date.now(),
        task,
        executor,
        priority,
      };
      this.props.addTask(newTask);

      this.setState({
        task: "",
        priority: "",
        executor: "Не выбрано",
        warning: false,
      });
    } else {
      this.setState({ warning: true });
    }
  };

  changeHandler = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  render() {
    const { classes, executors } = this.props;
    const { task, executor, priority, warning } = this.state;

    return (
      <div>
        <form className={classes.form} onSubmit={this.submitHandler}>
          {warning && <p>Заполните все поля</p>}
          <textarea
            className="form-input"
            name="task"
            onChange={this.changeHandler}
            value={task}
            placeholder="Описание"
          />
          <select
            className="form-input _executor"
            value={executor}
            name="executor"
            onChange={this.changeHandler}
          >
            {executors.map((executor, i) => {
              return (
                <option key={i} value={executor}>
                  {executor}
                </option>
              );
            })}
          </select>
          <input
            min="0"
            max="999"
            className="form-input _priority"
            name="priority"
            onChange={this.changeHandler}
            value={priority}
            type="number"
            placeholder="Приоритет"
          />
          <button className="button" type="submit">
            Добавить задачу
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    executors: state.data.executors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTask(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

TodoForm.propTypes = {
  executors: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
  classes: PropTypes.object,
};
