import {
  CREATE_TASK,
  TASKS_DATA,
  REMOVE_TODO,
  INCREMENT,
  DECREMENT,
  EXECUTORS_DATA,
} from "./types";
import axios from "axios";

export function createTask(task) {
  return {
    type: CREATE_TASK,
    task,
  };
}

export function removeTask(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function taskFetchDataSuccess(task) {
  return {
    type: TASKS_DATA,
    task,
  };
}

export function executorFetchDataSuccess(executor) {
  return {
    type: EXECUTORS_DATA,
    executor,
  };
}

export function priorityUp(id) {
  return {
    type: INCREMENT,
    id,
  };
}

export function priorityDown(id) {
  return {
    type: DECREMENT,
    id,
  };
}

export const addTask = (task) => {
  return (dispatch) => {
    axios
      .post(`/api/tasks`, task)
      .then((res) => {
        dispatch(createTask(res.data));
      })
      .catch((e) => {
        console.warn("Error:", e.message);
      });
  };
};

export function deleteTask(id) {
  return (dispatch) => {
    axios
      .delete(`/api/tasks/${id}`)
      .then(() => dispatch(removeTask(id)))
      .catch((e) => {
        console.warn("Error:", e.message);
      });
  };
}

export function taskFetchData(url) {
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => dispatch(taskFetchDataSuccess(res.data)))
      .catch((e) => {
        console.warn("Error:", e.message);
      });
  };
}
export function executorFetchData(url) {
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => dispatch(executorFetchDataSuccess(res.data)))
      .catch((e) => {
        console.warn("Error:", e.message);
      });
  };
}
export function taskPriorityUp(task) {
  return (dispatch) => {
    axios
      .put(`/api/tasks/${task.id}`, { ...task, priority: +task.priority + 1 })
      .then(() => dispatch(priorityUp(task.id)))
      .catch((e) => {
        console.warn("Error:", e.message);
      });
  };
}

export function taskPriorityDown(task) {
  return (dispatch) => {
    axios
      .put(`/api/tasks/${task.id}`, { ...task, priority: +task.priority - 1 })
      .then(() => dispatch(priorityDown(task.id)))
      .catch((e) => {
        console.warn("Error:", e.message);
      });
  };
}
