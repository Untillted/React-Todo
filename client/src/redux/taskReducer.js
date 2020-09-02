import {
  CREATE_TASK,
  TASKS_DATA,
  REMOVE_TODO,
  INCREMENT,
  DECREMENT,
  EXECUTORS_DATA,
} from "./types";

const initialState = {
  tasks: [],
  executors: [],
};
const sortFunc = (a, b) => b.priority - a.priority;

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_DATA:
      return { ...state, tasks: action.task };
    case EXECUTORS_DATA:
      return { ...state, executors: action.executor };
    case CREATE_TASK:
      return {
        ...state,
        tasks: state.tasks.concat([action.task]).sort(sortFunc),
      };
    case REMOVE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case INCREMENT:
      return {
        ...state,
        tasks: state.tasks
          .map((task) => {
            if (task.id === action.id) {
              task.priority++;
            }
            return task;
          })
          .sort(sortFunc),
      };
    case DECREMENT:
      return {
        ...state,
        tasks: state.tasks
          .map((task) => {
            if (task.id === action.id) {
              task.priority--;
            }
            return task;
          })
          .sort(sortFunc),
      };
    default:
      return state;
  }
};
