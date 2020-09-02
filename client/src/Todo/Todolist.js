import React from "react";
import Todoitem from "./TodoItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { taskFetchData, executorFetchData } from "../redux/actions";

class Todolist extends React.Component {
  componentDidMount() {
    this.props.tasksData("/api/tasks");
    this.props.executorsData("/api/executors");
  }
  render() {
    return (
      <div>
        <Todoitem />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tasksData: (url) => {
      dispatch(taskFetchData(url));
    },
    executorsData: (url) => {
      dispatch(executorFetchData(url));
    },
  };
};
export default connect(null, mapDispatchToProps)(Todolist);

Todolist.propTypes = {
  tasksData: PropTypes.func.isRequired,
  executorsData: PropTypes.func.isRequired,
};
