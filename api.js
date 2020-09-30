const express = require("express");
const router = express.Router();

let TASKS = [];

let EXECUTORS = ["Не выбрано", "Karianne", "Kamren", "Samantha", "Ervin"];

router.get("/tasks", (req, res) => {
  res.json(TASKS.sort((a, b) => b.priority - a.priority));
});
router.get("/executors", (req, res) => {
  res.json(EXECUTORS);
});

router.post("/tasks", (req, res) => {
  const task = { ...req.body };
  TASKS.push(task);
  res.json(task);
});

router.delete("/tasks/:id", (req, res) => {
  TASKS = TASKS.filter((task) => task.id != req.params.id);
  res.json();
});

router.put("/tasks/:id", (req, res) => {
  const idx = TASKS.findIndex((task) => task.id == req.params.id);
  TASKS[idx] = req.body;
  res.json();
});

module.exports = router;
