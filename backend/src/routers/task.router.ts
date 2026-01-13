import { Router } from "express";
import taskService from '../service/task';

const task = Router();

task.get('/', async (_req, res) => {
  const savedTasks = await taskService.getTasks();
  res.json(savedTasks);
});

export default task;